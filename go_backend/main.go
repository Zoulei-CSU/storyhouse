package main

import (
	"bufio"
	"embed"
	"encoding/base64"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"io/fs"
	"log"
	"mime"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"sort"
	"strconv"
	"strings"
	"sync"
	"time"
)

//go:embed all:dist
var distFS embed.FS

const (
	maxNameLength = 24
	maxListLength = 500
)

var avatarEmojis = []string{"🐣", "🐻", "🦊", "🐼", "🐯", "🦁", "🐰", "🐨", "🐸", "🦄", "🐙", "🐳", "🦉", "🐢", "🌟", "🚀"}

var avatarColors = []string{"#ffd166", "#f78fb3", "#8ecae6", "#95d5b2", "#ffb4a2", "#bde0fe", "#ffc6ff", "#b8f2e6"}

type userProfile struct {
	Name        string   `json:"name"`
	Bio         string   `json:"bio"`
	AvatarEmoji string   `json:"avatarEmoji"`
	AvatarColor string   `json:"avatarColor"`
	Favorites   []string `json:"favorites"`
	History     []string `json:"history"`
	CreatedAt   string   `json:"createdAt"`
	UpdatedAt   string   `json:"updatedAt"`
}

type userPatch struct {
	Bio         *string   `json:"bio"`
	AvatarEmoji *string   `json:"avatarEmoji"`
	AvatarColor *string   `json:"avatarColor"`
	Favorites   *[]string `json:"favorites"`
	History     *[]string `json:"history"`
}

type voiceInfo struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Count int    `json:"count"`
}

type store interface {
	label() string
	get(name string) (*userProfile, error)
	createOrGet(name string) (*userProfile, error)
	update(name string, patch userPatch) (*userProfile, error)
}

func hashName(name string) uint32 {
	var hash uint32
	for _, r := range name {
		hash = hash*31 + uint32(r)
	}
	return hash
}

func normalizeName(input string) string {
	cleaned := strings.Map(func(r rune) rune {
		if r < 0x20 || r == 0x7f {
			return -1
		}
		return r
	}, input)
	cleaned = strings.TrimSpace(cleaned)
	runes := []rune(cleaned)
	if len(runes) > maxNameLength {
		runes = runes[:maxNameLength]
	}
	return string(runes)
}

func newProfile(name string) *userProfile {
	now := time.Now().UTC().Format("2006-01-02T15:04:05.000Z")
	hash := hashName(name)
	return &userProfile{
		Name:        name,
		Bio:         "",
		AvatarEmoji: avatarEmojis[int(hash)%len(avatarEmojis)],
		AvatarColor: avatarColors[int(hash)%len(avatarColors)],
		Favorites:   []string{},
		History:     []string{},
		CreatedAt:   now,
		UpdatedAt:   now,
	}
}

func sanitizeIDList(value []string) []string {
	result := make([]string, 0, len(value))
	seen := make(map[string]struct{})
	for _, item := range value {
		id := strings.TrimSpace(item)
		if len(id) > 80 {
			id = id[:80]
		}
		if id == "" {
			continue
		}
		if _, exists := seen[id]; exists {
			continue
		}
		seen[id] = struct{}{}
		result = append(result, id)
		if len(result) >= maxListLength {
			break
		}
	}
	return result
}

func applyPatch(user *userProfile, patch userPatch) *userProfile {
	if patch.Bio != nil {
		bio := sanitizeText(*patch.Bio, 200)
		user.Bio = bio
	}
	if patch.AvatarEmoji != nil {
		if emoji := sanitizeText(*patch.AvatarEmoji, 8); emoji != "" {
			user.AvatarEmoji = emoji
		}
	}
	if patch.AvatarColor != nil {
		if color := sanitizeText(*patch.AvatarColor, 32); isHexColor(color) {
			user.AvatarColor = color
		}
	}
	if patch.Favorites != nil {
		user.Favorites = sanitizeIDList(*patch.Favorites)
	}
	if patch.History != nil {
		user.History = sanitizeIDList(*patch.History)
	}
	user.UpdatedAt = time.Now().UTC().Format("2006-01-02T15:04:05.000Z")
	return user
}

func sanitizeText(value string, maxLength int) string {
	cleaned := strings.Map(func(r rune) rune {
		if (r < 0x20 && r != '\t' && r != '\n' && r != '\r') || r == 0x7f {
			return -1
		}
		return r
	}, value)
	cleaned = strings.TrimSpace(cleaned)
	runes := []rune(cleaned)
	if len(runes) > maxLength {
		runes = runes[:maxLength]
	}
	return string(runes)
}

func isHexColor(value string) bool {
	if len(value) != 7 || value[0] != '#' {
		return false
	}
	for _, r := range value[1:] {
		if !((r >= '0' && r <= '9') || (r >= 'a' && r <= 'f') || (r >= 'A' && r <= 'F')) {
			return false
		}
	}
	return true
}

// ---- in-memory store ----

type memoryStore struct {
	mu    sync.Mutex
	users map[string]*userProfile
}

func newMemoryStore() *memoryStore {
	return &memoryStore{users: make(map[string]*userProfile)}
}

func (s *memoryStore) label() string { return "memory" }

func (s *memoryStore) get(name string) (*userProfile, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	user, ok := s.users[strings.ToLower(name)]
	if !ok {
		return nil, nil
	}
	return cloneProfile(user), nil
}

func (s *memoryStore) createOrGet(name string) (*userProfile, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	key := strings.ToLower(name)
	if user, ok := s.users[key]; ok {
		return cloneProfile(user), nil
	}
	user := newProfile(name)
	s.users[key] = user
	return cloneProfile(user), nil
}

func (s *memoryStore) update(name string, patch userPatch) (*userProfile, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	key := strings.ToLower(name)
	user, ok := s.users[key]
	if !ok {
		user = newProfile(name)
	}
	s.users[key] = applyPatch(cloneProfile(user), patch)
	return cloneProfile(s.users[key]), nil
}

func cloneProfile(user *userProfile) *userProfile {
	copy := &userProfile{
		Name:        user.Name,
		Bio:         user.Bio,
		AvatarEmoji: user.AvatarEmoji,
		AvatarColor: user.AvatarColor,
		CreatedAt:   user.CreatedAt,
		UpdatedAt:   user.UpdatedAt,
		Favorites:   append([]string{}, user.Favorites...),
		History:     append([]string{}, user.History...),
	}
	return copy
}

// ---- file store ----

type fileStore struct {
	dir string
	mu  sync.Mutex
}

func newFileStore(dir string) (*fileStore, error) {
	if err := os.MkdirAll(dir, 0o755); err != nil {
		return nil, err
	}
	return &fileStore{dir: dir}, nil
}

func (s *fileStore) label() string { return "file" }

func (s *fileStore) nameKey(name string) string {
	return base64.RawURLEncoding.EncodeToString([]byte(strings.ToLower(name)))
}

func (s *fileStore) userPath(key string) string {
	return filepath.Join(s.dir, key+".json")
}

func (s *fileStore) get(name string) (*userProfile, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	return s.readLocked(s.nameKey(name))
}

func (s *fileStore) readLocked(key string) (*userProfile, error) {
	raw, err := os.ReadFile(s.userPath(key))
	if err != nil {
		if os.IsNotExist(err) {
			return nil, nil
		}
		return nil, err
	}
	var user userProfile
	if err := json.Unmarshal(raw, &user); err != nil {
		return nil, err
	}
	return &user, nil
}

func (s *fileStore) writeLocked(user *userProfile) error {
	raw, err := json.MarshalIndent(user, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(s.userPath(s.nameKey(user.Name)), raw, 0o644)
}

func (s *fileStore) createOrGet(name string) (*userProfile, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	key := s.nameKey(name)
	existing, err := s.readLocked(key)
	if err != nil {
		return nil, err
	}
	if existing != nil {
		return existing, nil
	}
	user := newProfile(name)
	if err := s.writeLocked(user); err != nil {
		return nil, err
	}
	return user, nil
}

func (s *fileStore) update(name string, patch userPatch) (*userProfile, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	key := s.nameKey(name)
	existing, err := s.readLocked(key)
	if err != nil {
		return nil, err
	}
	if existing == nil {
		existing = newProfile(name)
	}
	user := applyPatch(existing, patch)
	if err := s.writeLocked(user); err != nil {
		return nil, err
	}
	return user, nil
}

// ---- audio voices ----

var audioExtensions = []string{".mp3", ".m4a", ".ogg"}

func audioExtension(name string) string {
	ext := strings.ToLower(filepath.Ext(name))
	for _, candidate := range audioExtensions {
		if ext == candidate {
			return ext
		}
	}
	return ""
}

func hasAudioExt(name string) bool {
	return audioExtension(name) != ""
}

func audioContentType(name string) string {
	switch audioExtension(name) {
	case ".mp3":
		return "audio/mpeg"
	case ".m4a":
		return "audio/mp4"
	case ".ogg":
		return "audio/ogg"
	}
	return ""
}

// isSafeSegment 允许中文等字符，但禁止路径穿越与分隔符。
func isSafeSegment(value string) bool {
	trimmed := strings.TrimSpace(value)
	if trimmed == "" || len([]rune(trimmed)) > 100 {
		return false
	}
	if trimmed == "." || trimmed == ".." {
		return false
	}
	if strings.ContainsAny(trimmed, "/\\\x00") {
		return false
	}
	return true
}

func isInsideDir(base, target string) bool {
	absBase, err := filepath.Abs(base)
	if err != nil {
		return false
	}
	absTarget, err := filepath.Abs(target)
	if err != nil {
		return false
	}
	rel, err := filepath.Rel(absBase, absTarget)
	if err != nil {
		return false
	}
	if rel == ".." || strings.HasPrefix(rel, ".."+string(filepath.Separator)) {
		return false
	}
	return true
}

func (s *server) listVoices() []voiceInfo {
	if strings.TrimSpace(s.audioDir) == "" {
		return []voiceInfo{}
	}
	entries, err := os.ReadDir(s.audioDir)
	if err != nil {
		return []voiceInfo{}
	}
	voices := make([]voiceInfo, 0, len(entries))
	for _, entry := range entries {
		if !entry.IsDir() || !isSafeSegment(entry.Name()) {
			continue
		}
		count := 0
		if files, err := os.ReadDir(filepath.Join(s.audioDir, entry.Name())); err == nil {
			for _, file := range files {
				if !file.IsDir() && hasAudioExt(file.Name()) {
					count++
				}
			}
		}
		voices = append(voices, voiceInfo{ID: entry.Name(), Name: entry.Name(), Count: count})
	}
	sort.Slice(voices, func(i, j int) bool { return voices[i].ID < voices[j].ID })
	return voices
}

func (s *server) readVoiceIndex(voiceID string) ([]string, bool) {
	if strings.TrimSpace(s.audioDir) == "" || !isSafeSegment(voiceID) {
		return nil, false
	}
	dir := filepath.Join(s.audioDir, voiceID)
	if !isInsideDir(s.audioDir, dir) {
		return nil, false
	}
	files, err := os.ReadDir(dir)
	if err != nil {
		return nil, false
	}
	ids := []string{}
	for _, file := range files {
		name := file.Name()
		ext := audioExtension(name)
		if file.IsDir() || ext == "" {
			continue
		}
		ids = append(ids, strings.TrimSuffix(name, ext))
	}
	sort.Strings(ids)
	return ids, true
}

func (s *server) resolveAudioFile(voiceID, storyID string) (string, os.FileInfo, bool) {
	if strings.TrimSpace(s.audioDir) == "" || !isSafeSegment(voiceID) || !isSafeSegment(storyID) {
		return "", nil, false
	}
	for _, ext := range audioExtensions {
		filePath := filepath.Join(s.audioDir, voiceID, storyID+ext)
		if !isInsideDir(s.audioDir, filePath) {
			continue
		}
		info, err := os.Stat(filePath)
		if err == nil && !info.IsDir() {
			return filePath, info, true
		}
	}
	return "", nil, false
}

func (s *server) serveAudio(w http.ResponseWriter, r *http.Request, voiceID, storyID string) {
	filePath, info, ok := s.resolveAudioFile(voiceID, storyID)
	if !ok {
		writeJSON(w, http.StatusNotFound, map[string]string{"error": "audio not found"})
		return
	}
	file, err := os.Open(filePath)
	if err != nil {
		writeJSON(w, http.StatusNotFound, map[string]string{"error": "audio not found"})
		return
	}
	defer file.Close()
	contentType := audioContentType(filePath)
	if contentType == "" {
		contentType = "application/octet-stream"
	}
	w.Header().Set("Content-Type", contentType)
	w.Header().Set("Cache-Control", "public, max-age=86400")
	http.ServeContent(w, r, info.Name(), info.ModTime(), file)
}

// ---- story images ----

// 图片只认 .jpg（大小写不敏感）。如需其它格式，在此扩展即可。
func imageExtension(name string) string {
	if strings.ToLower(filepath.Ext(name)) == ".jpg" {
		return ".jpg"
	}
	return ""
}

func (s *server) resolveImageFile(storyID string) (string, os.FileInfo, bool) {
	if strings.TrimSpace(s.imageDir) == "" || !isSafeSegment(storyID) {
		return "", nil, false
	}
	filePath := filepath.Join(s.imageDir, storyID+".jpg")
	if !isInsideDir(s.imageDir, filePath) {
		return "", nil, false
	}
	info, err := os.Stat(filePath)
	if err == nil && !info.IsDir() {
		return filePath, info, true
	}
	return "", nil, false
}

func (s *server) serveImage(w http.ResponseWriter, r *http.Request, storyID string) {
	filePath, info, ok := s.resolveImageFile(storyID)
	if !ok {
		writeJSON(w, http.StatusNotFound, map[string]string{"error": "image not found"})
		return
	}
	file, err := os.Open(filePath)
	if err != nil {
		writeJSON(w, http.StatusNotFound, map[string]string{"error": "image not found"})
		return
	}
	defer file.Close()

	w.Header().Set("Content-Type", "image/jpeg")
	// 图片可能被重新生成（同名换内容），所以不用 immutable；带 ETag 回源校验成本很低。
	w.Header().Set("Cache-Control", "public, max-age=86400")
	http.ServeContent(w, r, info.Name(), info.ModTime(), file)
}

// listImageIndex 返回已有配图的故事 id，用于覆盖率统计与预检。
func (s *server) listImageIndex() []string {
	ids := []string{}
	if strings.TrimSpace(s.imageDir) == "" {
		return ids
	}
	entries, err := os.ReadDir(s.imageDir)
	if err != nil {
		return ids
	}
	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}
		name := entry.Name()
		ext := imageExtension(name)
		if ext == "" {
			continue
		}
		base := strings.TrimSuffix(name, ext)
		if isSafeSegment(base) {
			ids = append(ids, base)
		}
	}
	sort.Strings(ids)
	return ids
}

// ---- http server ----

type server struct {
	prefix   string
	store    store
	index    []byte
	assets   fs.FS
	audioDir string
	imageDir string
}

func newServer(prefix string, st store, audioDir, imageDir string) (*server, error) {
	assets, err := fs.Sub(distFS, "dist")
	if err != nil {
		return nil, err
	}
	rawIndex, err := fs.ReadFile(assets, "index.html")
	if err != nil {
		return nil, err
	}
	return &server{
		prefix:   prefix,
		store:    st,
		index:    injectConfig(rawIndex, prefix),
		assets:   assets,
		audioDir: audioDir,
		imageDir: imageDir,
	}, nil
}

func injectConfig(index []byte, prefix string) []byte {
	base := prefix
	if base == "" {
		base = "/"
	}
	baseJSON, _ := json.Marshal(base)
	apiBase := base
	if apiBase == "/" {
		apiBase = ""
	}
	apiJSON, _ := json.Marshal(apiBase)
	href := "/"
	if prefix != "/" {
		href = prefix + "/"
	}
	injection := fmt.Sprintf(
		"<base href=\"%s\" />\n    <script>window.__STORY_HOUSE_CONFIG__={base:%s,apiBase:%s};</script>\n  ",
		href, baseJSON, apiJSON,
	)
	content := string(index)
	lower := strings.ToLower(content)
	if idx := strings.Index(lower, "<head>"); idx >= 0 {
		insertAt := idx + len("<head>")
		return []byte(content[:insertAt] + "\n    " + injection + content[insertAt:])
	}
	return []byte(injection + content)
}

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	setCORS(w)
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusNoContent)
		return
	}

	p := r.URL.Path
	if s.prefix != "/" {
		if p == s.prefix {
			http.Redirect(w, r, s.prefix+"/", http.StatusMovedPermanently)
			return
		}
		if !strings.HasPrefix(p, s.prefix+"/") {
			s.notFound(w, r)
			return
		}
	}

	rest := p
	if s.prefix != "/" {
		rest = strings.TrimPrefix(p, s.prefix)
	}
	if rest == "" {
		rest = "/"
	}

	if strings.HasPrefix(rest, "/api/") || rest == "/api" {
		s.serveAPI(w, r, rest)
		return
	}
	s.serveStatic(w, r, rest)
}

func (s *server) serveAPI(w http.ResponseWriter, r *http.Request, rest string) {
	if rest == "/api/health" && r.Method == http.MethodGet {
		writeJSON(w, http.StatusOK, map[string]any{
			"ok":      true,
			"mode":    "server",
			"storage": s.store.label(),
			"features": map[string]any{
				"audioVoices": len(s.listVoices()) > 0,
				"coverImages": len(s.listImageIndex()) > 0,
			},
			"time":  time.Now().UTC().Format(time.RFC3339),
			"build": versionInfo(),
		})
		return
	}

	if rest == "/api/voices" && r.Method == http.MethodGet {
		writeJSON(w, http.StatusOK, map[string]any{"voices": s.listVoices(), "storage": s.store.label()})
		return
	}

	if strings.HasPrefix(rest, "/api/voices/") && (r.Method == http.MethodGet || r.Method == http.MethodHead) {
		remainder := strings.TrimPrefix(rest, "/api/voices/")
		if index := strings.Index(remainder, "/"); index > 0 {
			voiceID, err := urlPathUnescape(remainder[:index])
			if err != nil {
				writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid voice id"})
				return
			}
			tail := remainder[index+1:]
			if tail == "index" {
				ids, ok := s.readVoiceIndex(voiceID)
				if !ok {
					writeJSON(w, http.StatusNotFound, map[string]string{"error": "voice not found"})
					return
				}
				writeJSON(w, http.StatusOK, map[string]any{"voiceId": voiceID, "storyIds": ids})
				return
			}
			if strings.HasSuffix(strings.ToLower(tail), ".mp3") {
				storyID, err := urlPathUnescape(tail[:len(tail)-len(".mp3")])
				if err != nil {
					writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid story id"})
					return
				}
				s.serveAudio(w, r, voiceID, storyID)
				return
			}
		}
		writeJSON(w, http.StatusNotFound, map[string]string{"error": "not found"})
		return
	}

	if rest == "/api/images" && r.Method == http.MethodGet {
		ids := s.listImageIndex()
		writeJSON(w, http.StatusOK, map[string]any{"count": len(ids), "storyIds": ids})
		return
	}

	if strings.HasPrefix(rest, "/api/images/") && (r.Method == http.MethodGet || r.Method == http.MethodHead) {
		tail := strings.TrimPrefix(rest, "/api/images/")
		if strings.HasSuffix(strings.ToLower(tail), ".jpg") {
			storyID, err := urlPathUnescape(tail[:len(tail)-len(".jpg")])
			if err != nil {
				writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid story id"})
				return
			}
			s.serveImage(w, r, storyID)
			return
		}
		writeJSON(w, http.StatusNotFound, map[string]string{"error": "not found"})
		return
	}

	if rest == "/api/users" && r.Method == http.MethodPost {
		var body struct {
			Name string `json:"name"`
		}
		if err := readJSON(r, &body); err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid json"})
			return
		}
		name := normalizeName(body.Name)
		if name == "" {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": "name is required"})
			return
		}
		user, err := s.store.createOrGet(name)
		if err != nil {
			writeJSON(w, http.StatusInternalServerError, map[string]string{"error": err.Error()})
			return
		}
		writeJSON(w, http.StatusOK, map[string]any{"user": user, "storage": s.store.label()})
		return
	}

	if strings.HasPrefix(rest, "/api/users/") {
		rawName := strings.TrimPrefix(rest, "/api/users/")
		decoded, err := urlPathUnescape(rawName)
		if err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid name"})
			return
		}
		name := normalizeName(decoded)
		if name == "" {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": "name is required"})
			return
		}

		switch r.Method {
		case http.MethodGet:
			user, err := s.store.get(name)
			if err != nil {
				writeJSON(w, http.StatusInternalServerError, map[string]string{"error": err.Error()})
				return
			}
			if user == nil {
				writeJSON(w, http.StatusNotFound, map[string]string{"error": "user not found"})
				return
			}
			writeJSON(w, http.StatusOK, map[string]any{"user": user, "storage": s.store.label()})
			return
		case http.MethodPut:
			var patch userPatch
			if err := readJSON(r, &patch); err != nil {
				writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid json"})
				return
			}
			user, err := s.store.update(name, patch)
			if err != nil {
				writeJSON(w, http.StatusInternalServerError, map[string]string{"error": err.Error()})
				return
			}
			writeJSON(w, http.StatusOK, map[string]any{"user": user, "storage": s.store.label()})
			return
		}
	}

	writeJSON(w, http.StatusNotFound, map[string]string{"error": "not found"})
}

func (s *server) serveStatic(w http.ResponseWriter, r *http.Request, rest string) {
	rel := strings.TrimPrefix(rest, "/")
	if rel != "" {
		if file, err := s.assets.Open(rel); err == nil {
			defer file.Close()
			if info, statErr := file.Stat(); statErr == nil && !info.IsDir() {
				contentType := contentTypeFor(rel)
				if contentType != "" {
					w.Header().Set("Content-Type", contentType)
				}
				if strings.HasPrefix(rel, "assets/") {
					w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
				}
				if seeker, ok := file.(io.ReadSeeker); ok {
					http.ServeContent(w, r, path.Base(rel), info.ModTime(), seeker)
					return
				}
				_, _ = io.Copy(w, file)
				return
			}
		}
	}
	s.writeIndex(w)
}

func (s *server) writeIndex(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Cache-Control", "no-cache")
	_, _ = w.Write(s.index)
}

func (s *server) notFound(w http.ResponseWriter, r *http.Request) {
	if strings.Contains(r.Header.Get("Accept"), "text/html") && s.prefix != "/" {
		http.Redirect(w, r, s.prefix+"/", http.StatusFound)
		return
	}
	http.NotFound(w, r)
}

func contentTypeFor(name string) string {
	if ct := mime.TypeByExtension(path.Ext(name)); ct != "" {
		return ct
	}
	switch strings.ToLower(path.Ext(name)) {
	case ".js", ".mjs":
		return "text/javascript; charset=utf-8"
	case ".css":
		return "text/css; charset=utf-8"
	case ".html":
		return "text/html; charset=utf-8"
	case ".json":
		return "application/json; charset=utf-8"
	case ".svg":
		return "image/svg+xml"
	case ".woff2":
		return "font/woff2"
	case ".webmanifest":
		return "application/manifest+json"
	}
	return ""
}

func readJSON(r *http.Request, target any) error {
	defer r.Body.Close()
	decoder := json.NewDecoder(io.LimitReader(r.Body, 1<<20))
	if err := decoder.Decode(target); err != nil {
		if err == io.EOF {
			return nil
		}
		return err
	}
	return nil
}

func writeJSON(w http.ResponseWriter, status int, body any) {
	payload, err := json.Marshal(body)
	if err != nil {
		http.Error(w, "encoding error", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")
	w.WriteHeader(status)
	_, _ = w.Write(payload)
}

func setCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func urlPathUnescape(value string) (string, error) {
	// net/url.PathUnescape minus the import churn for a single call site.
	if !strings.Contains(value, "%") {
		return value, nil
	}
	decoded, err := decodePercent(value)
	if err != nil {
		return "", err
	}
	return decoded, nil
}

func decodePercent(value string) (string, error) {
	var builder strings.Builder
	for i := 0; i < len(value); i++ {
		if value[i] != '%' {
			builder.WriteByte(value[i])
			continue
		}
		if i+2 >= len(value) {
			return "", fmt.Errorf("invalid escape")
		}
		high, err := hexValue(value[i+1])
		if err != nil {
			return "", err
		}
		low, err := hexValue(value[i+2])
		if err != nil {
			return "", err
		}
		builder.WriteByte(high<<4 | low)
		i += 2
	}
	return builder.String(), nil
}

func hexValue(char byte) (byte, error) {
	switch {
	case char >= '0' && char <= '9':
		return char - '0', nil
	case char >= 'a' && char <= 'f':
		return char - 'a' + 10, nil
	case char >= 'A' && char <= 'F':
		return char - 'A' + 10, nil
	}
	return 0, fmt.Errorf("invalid hex")
}

func normalizePrefix(input string) string {
	value := strings.TrimSpace(input)
	if value == "" || value == "/" {
		return "/"
	}
	if idx := strings.IndexAny(value, "?#"); idx >= 0 {
		value = value[:idx]
	}
	if !strings.HasPrefix(value, "/") {
		value = "/" + value
	}
	value = strings.TrimRight(value, "/")
	if value == "" {
		return "/"
	}
	var builder strings.Builder
	for _, r := range value {
		switch {
		case r >= 'a' && r <= 'z', r >= 'A' && r <= 'Z', r >= '0' && r <= '9':
			builder.WriteRune(r)
		case r == '/' || r == '-' || r == '_' || r == '.':
			builder.WriteRune(r)
		}
	}
	result := builder.String()
	if result == "" || result == "/" || strings.Contains(result, "..") {
		return "/"
	}
	return result
}

func prompt(reader *bufio.Reader, label, fallback string) string {
	fmt.Printf("%s [%s]: ", label, fallback)
	line, err := reader.ReadString('\n')
	if err != nil && line == "" {
		fmt.Println()
		return fallback
	}
	line = strings.TrimSpace(line)
	if line == "" {
		return fallback
	}
	return line
}

// 目录参数里 - / none / 无 都表示关闭对应功能，返回空字符串。
func dirOrDisabled(input string) string {
	trimmed := strings.TrimSpace(input)
	switch trimmed {
	case "-", "none", "无":
		return ""
	}
	return trimmed
}

// 这些值在编译时通过 -ldflags -X 注入，见 scripts/build-go.mjs。
// 便于用户在内嵌页面「关于」中确认自己跑的是哪个版本。
var (
	version   = "dev"
	buildTime = "unknown"
	gitCommit = "unknown"
)

func versionInfo() map[string]string {
	return map[string]string{
		"version":   version,
		"buildTime": buildTime,
		"gitCommit": gitCommit,
	}
}

const helpText = `小星星故事屋 · 单文件服务器
内嵌前端与用户数据 API，单文件运行，无需 Node.js。

用法:
  storyhouse [选项]

  不带选项运行时进入问答模式，依次询问端口、URL 前缀、数据目录、音频目录与配图目录。

选项:
  --port <int>        监听端口，范围 1-65535（默认 8080）
  --prefix <path>     URL 前缀，如 /story（默认 /，即根路径部署）
  --data-dir <path>   用户数据目录（默认空，仅存内存，进程退出即丢失）
  --audio-dir <path>  音色音频目录（默认 audio-voices；设为 - 表示关闭）
  --image-dir <path>  故事配图目录（默认 story-images；设为 - 表示关闭）
  --version           显示版本号并退出
  -h, --help          显示本帮助并退出

示例:
  storyhouse
      问答模式，依次输入各项配置

  storyhouse --port 9000
      监听 9000，其余使用默认值（根路径、内存存储）

  storyhouse --prefix /story --data-dir /var/lib/storyhouse
      在 /story/ 下提供服务，用户数据落盘到指定目录

  storyhouse --audio-dir -
      关闭音色朗读，仅保留浏览器 TTS

  storyhouse --image-dir ./story-images
      为故事详情页加载 AI 插画（文件名为 <故事id>.jpg）

说明:
  数据目录留空时数据仅存内存，适合临时演示；需要长期保存请显式指定 --data-dir。
  音频目录下每个子文件夹即一个音色，内放 <故事id>.mp3，故事 id 见
  docs/audio/voice-manifest.json；目录不存在时音色功能自动关闭。
  配图目录内放 <故事id>.jpg；缺失的图片由前端回退为图标封面，不影响使用。
  完整的部署方式与 HTTP 接口说明见 go_backend/docs/GO_BACKEND_BUILD_DEPLOY.md。
`

func main() {
	flags := flag.NewFlagSet("storyhouse", flag.ContinueOnError)
	flags.SetOutput(os.Stdout)
	portFlag := flags.Int("port", 0, "监听端口")
	prefixFlag := flags.String("prefix", "", "URL 前缀")
	dataDirFlag := flags.String("data-dir", "", "用户数据目录")
	audioDirFlag := flags.String("audio-dir", "audio-voices", "音色音频目录")
	imageDirFlag := flags.String("image-dir", "story-images", "故事配图目录")
	versionFlag := flags.Bool("version", false, "显示版本号")
	flags.Usage = func() { fmt.Fprint(flags.Output(), helpText) }

	if err := flags.Parse(os.Args[1:]); err != nil {
		if err == flag.ErrHelp {
			return
		}
		os.Exit(2)
	}

	if *versionFlag {
		fmt.Printf("storyhouse %s\n", version)
		fmt.Printf("构建时间: %s\n", buildTime)
		fmt.Printf("提交:     %s\n", gitCommit)
		return
	}

	provided := make(map[string]bool)
	flags.Visit(func(f *flag.Flag) { provided[f.Name] = true })

	port := 8080
	prefix := "/"
	dataDir := ""
	audioDir := "audio-voices"
	imageDir := "story-images"

	if len(provided) == 0 {
		reader := bufio.NewReader(os.Stdin)
		fmt.Println("==================================================")
		fmt.Println(" 小星星故事屋 · 单文件服务器")
		fmt.Println(" 提示：使用 --help 查看全部命令行参数")
		fmt.Println("==================================================")

		portInput := prompt(reader, "绑定端口", "8080")
		parsedPort, err := strconv.Atoi(portInput)
		if err != nil || parsedPort < 1 || parsedPort > 65535 {
			fmt.Printf("端口 %q 无效，使用默认 8080\n", portInput)
		} else {
			port = parsedPort
		}

		prefix = normalizePrefix(prompt(reader, "URL 前缀（如 /story，直接回车表示根路径 /）", "/"))
		dataDir = strings.TrimSpace(prompt(reader, "用户数据存储目录（留空则仅存内存，退出即丢失）", ""))
		audioDir = dirOrDisabled(prompt(reader, "音色音频目录（每个子文件夹一个音色；输入 - 表示不使用）", "audio-voices"))
		imageDir = dirOrDisabled(prompt(reader, "故事配图目录（放 <故事id>.jpg；输入 - 表示不使用）", "story-images"))
	} else {
		if provided["port"] {
			if *portFlag < 1 || *portFlag > 65535 {
				fmt.Fprintf(os.Stderr, "[错误] 端口 %d 无效，范围 1-65535\n", *portFlag)
				os.Exit(2)
			}
			port = *portFlag
		}
		prefix = normalizePrefix(*prefixFlag)
		dataDir = strings.TrimSpace(*dataDirFlag)
		// 与问答模式保持一致：- 表示关闭该功能
		audioDir = dirOrDisabled(*audioDirFlag)
		imageDir = dirOrDisabled(*imageDirFlag)
	}

	var st store
	if dataDir == "" {
		st = newMemoryStore()
		fmt.Println("[提示] 未指定数据目录，用户数据保存在内存中，进程退出后丢失。")
	} else {
		fileStore, err := newFileStore(dataDir)
		if err != nil {
			log.Fatalf("[错误] 无法创建数据目录 %q: %v", dataDir, err)
		}
		st = fileStore
	}

	srv, err := newServer(prefix, st, audioDir, imageDir)
	if err != nil {
		log.Fatalf("[错误] 初始化静态资源失败（请先执行 npm run build）: %v", err)
	}

	addr := fmt.Sprintf(":%d", port)
	displayPrefix := prefix
	if displayPrefix == "/" {
		displayPrefix = ""
	}
	fmt.Println("--------------------------------------------------")
	fmt.Printf("版本: %s（构建于 %s）\n", version, buildTime)
	fmt.Printf("访问地址: http://localhost:%d%s/\n", port, displayPrefix)
	fmt.Printf("存储模式: %s\n", st.label())
	if strings.TrimSpace(audioDir) == "" {
		fmt.Println("音色音频: 已关闭（仅浏览器朗读）")
	} else {
		fmt.Printf("音色音频: %s\n", audioDir)
	}
	if strings.TrimSpace(imageDir) == "" {
		fmt.Println("故事配图: 已关闭（使用图标封面）")
	} else {
		fmt.Printf("故事配图: %s（%d 张）\n", imageDir, len(srv.listImageIndex()))
	}
	fmt.Println("按 Ctrl+C 停止服务")
	fmt.Println("--------------------------------------------------")

	httpServer := &http.Server{
		Addr:              addr,
		Handler:           srv,
		ReadHeaderTimeout: 10 * time.Second,
	}
	if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatalf("[错误] 服务启动失败: %v", err)
	}
}

# 连续朗读（自动下一篇）设计稿

> 状态：**已定案**（2026-10-20）
> 目标：选定音色开始朗读后，读完自动进入下一篇并继续朗读。

---

## 一、要达成的行为

```
点「朗读故事」→ 正常朗读 → 自然读完
        ↓（连续播放开启）
短暂提示「3 秒后播放下一篇」
        ↓
跳转到下一篇 → 自动开始朗读 → 循环
```

**只在「自然读完」时触发。** 用户点停止、暂停、切换故事、切换音色，都不触发。

---

## 二、现状与关键缺口

| 位置 | 现状 |
|---|---|
| `useNarration` | 音色走 `<audio>`，TTS 走 `speechSynthesis`；**没有结束时回调** |
| `useSpeech` | 读完最后一个段落时只是把自己状态重置，外部无从得知这是「读完」还是「被 stop」 |
| `StoryDetailPage` | 已有 `prev` / `next`（按 `allStories` 顺序），但没有「下一篇可播」的概念 |
| `preferencesStore` | 已持久化 `speechRate` / `narrationSource` 等，可加开关 |
| `voiceIndex` | 已经拉取「该音色有哪些故事有音频」的索引，**可直接用来跳过无音频的篇目** |

**核心改动**：给 `useSpeech` / `useNarration` 增加 `onEnd` 回调，只在自然读完时触发一次。

---

## 三、逐个设计点

### 3.1 触发点

| 路径 | 自然结束 | 需要拦截的「非自然结束」 |
|---|---|---|
| 音色 | `audio.onended` | `teardownAudio()` 会把 `onended` 置空；`pause()` 不触发 |
| TTS | `speakNext()` 里 `index >= paragraphs.length` | `stop()` 先置 `cancelledRef = true`，`utterance.onend` 会直接 return |

要求：`onEnd` **每次播放只触发一次**，用 ref 防重入。

### 3.2 「下一篇」怎么选

推荐：**与页面现有「下一篇」完全一致**（`allStories` 顺序）。

`allStories` 本身按分类连续排列（寓言 → 成语 → 童话 → 神话 → 科普 → 品格 → 睡前），
所以效果是「同一分类内一篇接一篇，读完这个分类再进入下一个分类」，符合听故事的习惯。

备选：同分类内循环、同年龄段内推进——都更复杂，且与用户看到的「下一篇」不一致。

### 3.3 连续播放在哪里开

推荐：在朗读条上加一个 **「连续播放」开关**，状态持久化到 `preferencesStore`。

- 关闭时：行为与现在完全一致
- 开启时：自然读完才自动跳转
- 开关状态跨故事保留

### 3.4 转场时机

**已定案：读完显示 3 秒提示，然后跳转。**

- 朗读结束后显示「3 秒后播放《小熊的星星被》」，每秒递减
- 倒计时结束自动跳转并开始朗读
- 不设取消按钮：用户若不想继续，关掉「连续播放」开关即可；
  3 秒内手动点上一篇/下一篇或离开页面也会取消跳转

### 3.5 下一篇没有该音色怎么办

音色模式下不是每篇都有音频。已有 `voiceIndex`（该音色有音频的故事 id 集合），
推荐：**自动跳到后面第一个有该音色音频的故事**。

- 若无音频的篇目在中间，静默跳过，听感连续
- 全部都没有了 → 停在当前页，提示「后面没有这个音色的故事了」

备选：停在原地提示（不跳转，体验断但不迷惑）、回退浏览器朗读（与「缺音频必须报错」的
现有约定冲突，不推荐）。

### 3.6 自动播放会不会被浏览器拦截

音色走 `new Audio().play()`，TTS 走 `speechSynthesis.speak()`。

- SPA 内跳转**不重新加载文档**，用户此前点过「朗读故事」已构成用户手势，
  正常情况下允许自动播放
- 若仍被拒（Safari 严格模式等），`play()` 的 catch 会走到现有错误提示，
  用户可手动点一次继续
- 建议把这类错误文案单独区分成「浏览器拦截了自动播放，点一下继续」

### 3.7 什么情况下要取消待跳转

- 点「停止」
- 点「暂停」（暂停不算读完）
- 手动点「上一篇 / 下一篇」或返回
- 切换声音来源 / 切换音色
- 离开详情页（组件卸载时清定时器）

### 3.8 边界

| 场景 | 行为 |
|---|---|
| 已经是最后一篇 | 不跳转，提示「已经是最后一篇啦」 |
| 最后一篇且开启连续播放 | 同上，**不做循环回到第一篇** |
| 朗读被暂停 | 不触发，恢复后继续 |
| 倒计时中关闭页面 | 定时器清理，无跳转 |
| 后台标签页 | 定时器可能被节流，跳转会延后但不会错乱 |

---

## 四、实现方案（待确认后执行）

### 4.1 `useSpeech`

```ts
interface UseSpeechOptions {
  ...
  /** 自然读完时触发；stop/pause/切文本不触发 */
  onEnd?: () => void;
}
```
- `onEnd` 存 ref，避免闭包过期
- 在 `speakNext()` 判定 `index >= current.length` 的分支里触发一次

### 4.2 `useNarration`

```ts
interface UseNarrationOptions {
  ...
  onEnd?: () => void;
}
```
- 音色：`audio.onended` 里触发
- TTS：把 `onEnd` 透传给 `useSpeech`

### 4.3 新增 `playbackStore`（不持久化）

跨路由传「下一篇要自动开始」的信号：

```ts
interface PlaybackState {
  autoPlayId: string | null;
  requestAutoPlay: (id: string) => void;
  consumeAutoPlay: (id: string) => boolean;
}
```

不用 `location.state`：URL 状态会被刷新/前进后退带出来，且不好清理。

### 4.4 `StoryDetailPage`

```ts
const continuous = usePreferencesStore((s) => s.continuousPlay);
const [upcoming, setUpcoming] = useState<{ id: string; title: string } | null>(null);

// 自然读完
const handleNarrationEnd = () => {
  if (!continuous) return;
  const target = findNextPlayable(story.id, source, voiceIndex);
  if (!target) { setNotice('已经是最后一篇啦'); return; }
  setUpcoming(target);            // 进入 3 秒倒计时
};

// 倒计时结束
navigate(`/story/${target.id}`);
requestAutoPlay(target.id);
```

落地页：

```ts
// voiceIndex 就绪后再自动播，否则 hasVoice 还是 false 会误报缺音频
useEffect(() => {
  if (!consumeAutoPlay(storyId)) return;
  if (source.kind === 'voice' && !voiceIndexReady) return;  // 等索引
  narration.play(0);
}, [storyId, voiceIndexReady]);
```

> 注意：`voiceIndex` 是异步拉取的，**必须等它就绪**，否则自动播放会立刻报「没有音频」。
> 这是最容易写出 bug 的一处。

### 4.5 `SpeechBar`

加开关（持久化），以及倒计时条由页面渲染在朗读条下方，避免把导航逻辑塞进展示组件。

### 4.6 改动清单

| 文件 | 改动 |
|---|---|
| `src/hooks/useSpeech.ts` | 新增 `onEnd`，自然结束时触发 |
| `src/hooks/useNarration.ts` | 透传 `onEnd` |
| `src/store/preferencesStore.ts` | 新增 `continuousPlay` + setter |
| `src/store/playbackStore.ts` | **新增**，跨路由的自动播放信号 |
| `src/pages/StoryDetailPage.tsx` | 结束处理、可播目标查找、倒计时、自动开始 |
| `src/components/audio/SpeechBar.tsx` | 连续播放开关 |
| `docs/INTERFACES.md` / `STORY_*` | 契约与行为说明 |

---

## 五、已定案

| # | 事项 | 决定 |
|---|---|---|
| 1 | 连续播放默认开还是关 | **加开关，默认关**（持久化，老用户行为不变） |
| 2 | 适用范围 | **音色 + 浏览器朗读都支持**，同一个开关 |
| 3 | 下一篇没有该音色音频 | **跳到后面第一个有该音色音频的故事**，全都没有则停止并提示 |
| 4 | 转场方式 | **3 秒提示后跳转**，不设取消按钮 |

---

## 六、明确不做

- **不做循环播放**（读完最后一篇回到第一篇）
- **不做断点续听**（记住上次听到第几段）
- **不自动切换音色**（当前音色没有的篇目不回退其它音色）
- **不改动列表页**（自动跳转只发生在详情页之间）

---

## 七、风险

| 风险 | 应对 |
|---|---|
| 自动播放被浏览器拦截 | 保留手动播放按钮，错误文案区分「被拦截」 |
| 音色索引未就绪就自动播 | 用 `voiceIndexReady` 门控 |
| 连点导致重复跳转 | 倒计时唯一、`upcoming` 覆盖前先清理 |
| 倒计时期间用户手动导航 | 路由变化时清理定时器 |
| 最后一篇误触发 | 找不到目标直接停止并提示 |

---

## 八、实现记录（2026-10-20）

已按本方案落地。

**验证方式**：用 CDP 驱动无头 Edge，把 `speechSynthesis.speak` 替换成「立即回调 `onend`」，
从而在几秒内跑完「读完 → 提示 → 跳转 → 自动播放」整条链路（不必等真实音频读完）。

| 验证点 | 结果 |
|---|---|
| 读完出现提示 | 「3 秒后播放《白雪公主》」 |
| 自动跳转 | `/story/fairy-cinderella` → `/story/fairy-snow-white` |
| 落地真的在播 | 跳转后出现「暂停」按钮 |
| 关掉开关后停止 | 停留 6 秒未再跳转 |

本地没有音色音频，音色路径与 TTS 共用同一套 `onEnd` 触发（`audio.onended`），未单独实测。

**过程里踩的坑**：`StoryDetailPage` 用了 `useRef` 但没加进 import，
`tsc --noEmit` 因为 React 的 UMD 全局声明没有报错，页面在浏览器里直接白屏。
类型检查通过不等于能跑，浏览器实测这一步不能省。

### 上线后修复：页面切了，念的还是第一篇

v1.0.3 在服务器实测发现：连续播放时页面正常切到下一篇，但朗读的一直是第一篇，
连切多篇也一样。

**原因**：`useNarration` 在切换故事时只做了「停另一条路径」——

```ts
if (voiceMode) {
  ttsStop();        // 只停了 TTS
} else {
  teardownAudio();  // 只在 TTS 模式下销毁音频
}
```

音色模式下旧的 `<audio>` 元素留在 `audioRef` 里，它的 `src` 仍绑着第一篇；
`play()` 看到 ref 里有元素就直接 `play()`，于是永远播第一篇。

**修复**（两处）：

1. 切歌时两条路径都清理：`ttsStop(); teardownAudio();`
2. `play()` 增加防御：元素 `src` 与当前 `audioSrc` 不一致时重建

**验证**：用 `FakeAudio` 记录实例（本机无真实音频），跑完一篇后触发 `onended`：

| 断言 | 结果 |
|---|---|
| 第一个实例 src | `.../fairy-cinderella.mp3` |
| 跳转后新增实例 | `.../fairy-snow-white.mp3`，`paused=false` |
| 旧实例 | `onended` 已清空、`paused=true` |

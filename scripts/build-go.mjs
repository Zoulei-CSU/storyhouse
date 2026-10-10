#!/usr/bin/env node
/**
 * 跨平台编译 Go 单文件后台。
 *
 * 环境变量前缀（CGO_ENABLED=0 GOOS=...）在 bash 下有效、在 Windows cmd 下无效，
 * 因此这里统一用 cross-env 风格：借助 Node 直接 spawn 并传入 env，
 * 保证同一条命令在 Windows / Linux / macOS 上行为一致。
 *
 * 用法：
 *   node scripts/build-go.mjs                       # 构建当前平台（Windows 下产出 .exe）
 *   node scripts/build-go.mjs --target linux-amd64  # 交叉编译
 *   node scripts/build-go.mjs --all                 # 一次产出全部平台
 */
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const backendDir = join(root, 'go_backend');

/** 读取 package.json 的版本号，作为构建版本。 */
function readPkgVersion() {
  try {
    const raw = readFileSync(join(root, 'package.json'), 'utf8');
    return JSON.parse(raw).version ?? '0.0.0';
  } catch {
    return '0.0.0';
  }
}

/** 取当前 git 短 commit；不在仓库中或无 git 时返回 unknown。 */
function readGitCommit() {
  try {
    return execFileSync('git', ['rev-parse', '--short', 'HEAD'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return 'unknown';
  }
}

/** ISO 格式的构建时间（UTC），例如 2026-10-03T10:15:30Z */
function buildTimestamp() {
  return new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
}

/**
 * 检查 go_backend/dist 是否比所有前端源码新。
 * Go 用 //go:embed 在编译期把 dist 读进二进制——如果前端改了却没重新
 * 构建前端，编出来的服务端会内嵌**旧页面**，且没有任何报错，极难排查。
 * 这里显式拦截并给出可执行的修复提示。
 */
function assertDistFresh() {
  const distDir = join(backendDir, 'dist');
  if (!existsSync(join(distDir, 'index.html'))) {
    console.error('[错误] 未找到 go_backend/dist/index.html');
    console.error('请先运行：npm run build');
    process.exit(1);
  }
  const distTime = statSync(join(distDir, 'index.html')).mtimeMs;
  const roots = [join(root, 'src'), join(root, 'index.html'), join(root, 'vite.config.ts')];
  let newest = 0;
  let newestFile = '';
  const walk = (p) => {
    const st = statSync(p);
    if (st.isDirectory()) {
      for (const name of readdirSync(p)) walk(join(p, name));
    } else if (st.mtimeMs > newest) {
      newest = st.mtimeMs;
      newestFile = p;
    }
  };
  for (const p of roots) if (existsSync(p)) walk(p);

  if (newest > distTime) {
    console.error('[错误] 前端源码比 go_backend/dist 新，embed 会内嵌旧页面。');
    console.error(`  最新源码：${newestFile.replace(root + '\\', '').replace(root + '/', '')}`);
    console.error('  请先运行：npm run build');
    process.exit(1);
  }
}


/** name 用于产物文件名，ext 为该平台的扩展名（Windows 必须带 .exe）。 */
const TARGETS = {
  'windows-amd64': { name: 'storyhouse-windows-amd64.exe', goos: 'windows', goarch: 'amd64', ext: '.exe' },
  'windows-arm64': { name: 'storyhouse-windows-arm64.exe', goos: 'windows', goarch: 'arm64', ext: '.exe' },
  'linux-amd64': { name: 'storyhouse-linux-amd64', goos: 'linux', goarch: 'amd64', ext: '' },
  'linux-arm64': { name: 'storyhouse-linux-arm64', goos: 'linux', goarch: 'arm64', ext: '' },
  'darwin-amd64': { name: 'storyhouse-darwin-amd64', goos: 'darwin', goarch: 'amd64', ext: '' },
  'darwin-arm64': { name: 'storyhouse-darwin-arm64', goos: 'darwin', goarch: 'arm64', ext: '' },
};

function build(key) {
  const target = TARGETS[key];
  if (!target) {
    console.error(`[错误] 未知目标：${key}`);
    console.error(`可选：${Object.keys(TARGETS).join(', ')}`);
    process.exit(2);
  }
  mkdirSync(backendDir, { recursive: true });
  const out = join(backendDir, target.name);
  assertDistFresh();

  // 注入构建信息，供前端「关于」页与 `--version` 展示，
  // 便于确认内嵌的前端产物到底是哪一次构建的。
  const pkgVersion = readPkgVersion();
  const commit = readGitCommit();
  const stamp = buildTimestamp();
  // 变量路径为 main.version / main.buildTime / main.gitCommit
  const ldflags = [
    '-s',
    '-w',
    `-X main.version=${pkgVersion}`,
    `-X main.buildTime=${stamp}`,
    `-X main.gitCommit=${commit}`,
  ].join(' ');

  console.log(`[构建] ${key} -> ${target.name}`);
  console.log(`       版本 ${pkgVersion}  提交 ${commit}  构建于 ${stamp}`);
  const result = spawnSync('go', ['build', '-trimpath', `-ldflags=${ldflags}`, '-o', out, '.'], {
    cwd: backendDir,
    stdio: 'inherit',
    env: { ...process.env, CGO_ENABLED: '0', GOOS: target.goos, GOARCH: target.goarch },
  });
  if (result.error) {
    console.error(`[错误] 无法调用 go：${result.error.message}`);
    process.exit(1);
  }
  if (result.status !== 0) {
    console.error(`[错误] ${key} 编译失败（退出码 ${result.status}）`);
    process.exit(result.status ?? 1);
  }
  console.log(`[完成] ${target.name}  ${(statSync(out).size / 1024 / 1024).toFixed(2)} MB`);
}

const args = process.argv.slice(2);
if (args.includes('--all')) {
  for (const key of Object.keys(TARGETS)) build(key);
} else if (args.includes('--target')) {
  const key = args[args.indexOf('--target') + 1];
  build(key);
} else {
  const isWindows = process.platform === 'win32';
  // 本机平台：Windows 产出 .exe，其他平台不带扩展名
  const localKey = isWindows ? 'windows-amd64' : `${process.platform}-${process.arch}`;
  build(TARGETS[localKey] ? localKey : 'linux-amd64');
}

import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const api = spawn(process.execPath, [path.join(rootDir, 'server', 'index.js')], {
  cwd: rootDir,
  stdio: 'inherit',
});

const web = spawn(process.execPath, [path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js')], {
  cwd: rootDir,
  stdio: 'inherit',
});

let shuttingDown = false;
function shutdown(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of [api, web]) {
    if (!child.killed) child.kill('SIGTERM');
  }
  process.exit(code);
}

api.on('exit', (code) => {
  console.warn(`[story-house] API server exited with code ${code ?? 0}, continuing with local storage mode.`);
});

web.on('exit', (code) => shutdown(code ?? 0));

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

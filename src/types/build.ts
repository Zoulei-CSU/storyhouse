/** 后端构建信息，由 /api/health 的 build 字段返回（编译时注入）。 */
export interface BuildInfo {
  version: string;
  buildTime: string;
  gitCommit: string;
}

export interface HealthInfo {
  ok: boolean;
  mode: string;
  storage: string;
  features?: { audioVoices?: boolean };
  time?: string;
  build?: BuildInfo;
}

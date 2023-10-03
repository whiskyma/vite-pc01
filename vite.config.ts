import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { ConfigEnv, loadEnv, UserConfigExport } from "vite";
import { resolve } from "path";

const root: string = process.cwd();

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build"),
};

export default defineConfig({
  plugins: [vue()],
})

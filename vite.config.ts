// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// // import { ConfigEnv, loadEnv, UserConfigExport } from "vite";
// import { resolve } from "path";

// const root: string = process.cwd();

// /** 路径查找 */
// const pathResolve = (dir: string): string => {
//   return resolve(__dirname, ".", dir);
// };

// /** 设置别名 */
// const alias: Record<string, string> = {
//   "@": pathResolve("src"),
//   "@build": pathResolve("build"),
// };

// export default defineConfig({
//   plugins: [vue()],
// })


import type { UserConfig, ConfigEnv  } from "vite";
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { loadEnv } from 'vite';
// import basicSsl from '@vitejs/plugin-basic-ssl' 如果是https 需要引入

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({command, mode}: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  return {
    base: env.VITE_PUBLIC_PATH,
    root,
    server: {
      host: '0.0.0.0',
      port: 4000,
      open: false,
      strictPort: false,
      // https: fasle, // https 设置为true
      proxy: {
        '/api': {
          target: 'http://192.168.1.1:20/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    // 别名设置
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/'
        }
      ]
    },
    // 打包配置
    build: {
      sourcemap: false,
      watch: {},
      manifest: true
    },
    plugins: [vue()]
  }
}

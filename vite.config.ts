import type { UserConfig, ConfigEnv  } from "vite";
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { loadEnv } from 'vite';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({command, mode}: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  return {
    base: env.VITE_PUBLIC_PATH,
    root,
    // 服务配置
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
    // 别名配置
    resolve: {
      alias: {
        "@": pathResolve("src"),
        "@styl": pathResolve("./src/assets/styl"),
        "@img": pathResolve("./src/assets/img"),
        "@views": pathResolve("./src/assets/views"),
        "@comp": pathResolve("./src/assets/components"),
        "@utils": pathResolve("./src/assets/utils"),
      },
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

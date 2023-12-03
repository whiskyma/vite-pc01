import type { UserConfig, ConfigEnv  } from "vite";
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { loadEnv } from 'vite';
import {VitePWA} from 'vite-plugin-pwa'


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
    plugins: [
      vue(),
      VitePWA({
          manifest: {
            // 安装应用后显示的应用名
              name: "中国红",
              description: "这是中国红",
              // 至少配置一个图标
              icons: [{
                // 注意如果应用不是部署在站点根目录则需要相对路径，图片文件放在项目/public/pwa/192x192.png
                  src: "./pwa/192x192.png",
                  sizes: "192x192",
                  type: "image/png"
              }]
          },
          registerType: "autoUpdate",
          workbox: {
            // 对所有匹配的静态资源进行缓存
              globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          },
          devOptions: {
              enabled: true
          }
      })
    ]
  }
}

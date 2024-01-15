import { createApp } from "vue"
import App from "./App.vue"
import { registerSW } from "virtual:pwa-register"
const updateSW = registerSW({
  onNeedRefresh() {
    console.log(1)
  },
  onOfflineReady() {
    console.log(2)
  }
})
updateSW()
// 引入公共样式
import "@styl/base.styl"

createApp(App).mount("#app")

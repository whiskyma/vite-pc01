import { createApp } from 'vue'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'
const updateSW = registerSW({
    onNeedRefresh() {
        // show a prompt to user
    },
    onOfflineReady() {
        // show a ready to work offline to user
    },
})
updateSW()
// 引入公共样式
import '@styl/base.styl'

createApp(App).mount('#app')

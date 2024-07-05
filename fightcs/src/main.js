import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VWave from 'v-wave'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import "element-plus/theme-chalk/dark/css-vars.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import vuetyped from 'vue3typed'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VWave)
app.use(ElementPlus,{locale: zhCn})
app.use(vuetyped)

app.mount('#app')

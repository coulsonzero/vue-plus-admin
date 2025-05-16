import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// css
import "../src/assets/main.css"
// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(router)
// use element plus
app.use(ElementPlus)
// use icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')

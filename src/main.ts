import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import BasicFrontUI from './plugins/basicFrontUI'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import './assets/main.css'
import './styles/sass/index.scss'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 应用配置
/**
 * 错误处理，用来对应用级别进行错误处理，可捕获所有子组件抛出的错误
 */
app.config.errorHandler = (err) => {
  console.log('捕获错误', err)
}

// 注册全局组件

// 注册插件
app.use(router).use(createPinia())
// .use(BasicFrontUI)

app.mount('#app')

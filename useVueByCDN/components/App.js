import { reactive, toRefs } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import HelloWrold from './HellowWorld.js'
export default {
  components: {
    HelloWrold
  },
  name: 'App',
  setup() {
    const state = reactive({
      message: 'hello Vue'
    })
    return {
      ...toRefs(state)
    }
  },
  // 根组件的模板，不使用的话可在挂载的容器元素中直接写html作为根组件的模板
  /*html*/
  template: `
    <div class="app-container">
      {{ message }}
    </div>
  `
}
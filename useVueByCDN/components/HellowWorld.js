import { reactive, toRefs } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      count: 0
    })
    return {
      ...toRefs(state)
    }
  },
  /*html*/
  template: `<div>count is {{ count }}</div>`
}
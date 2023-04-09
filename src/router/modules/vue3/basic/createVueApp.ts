import type { AppRouteRecordRaw } from '../../../types'

// vue基础-创建一个Vue应用
const CreateVueApp: Array<AppRouteRecordRaw> = [
  {
    path: 'createVueApp',
    name: 'CreateVueApp',
    meta: {
      title: '创建一个Vue应用',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/createVueApp.vue')
  }
]

export default CreateVueApp

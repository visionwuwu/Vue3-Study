import type { AppRouteRecordRaw } from '../../../types'

// vue基础-条件渲染
const RonditionalRender: Array<AppRouteRecordRaw> = [
  {
    path: 'conditionalRender',
    name: 'ConditionalRender',
    meta: {
      title: '条件渲染',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/conditionalRender.vue')
  }
]

export default RonditionalRender

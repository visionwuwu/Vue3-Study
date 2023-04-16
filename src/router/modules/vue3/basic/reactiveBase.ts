import type { AppRouteRecordRaw } from '../../../types'

// vue基础-响应式基础
const ReactiveBase: Array<AppRouteRecordRaw> = [
  {
    path: 'reactiveBase',
    name: 'reactiveBase',
    meta: {
      title: '响应式基础',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/reactiveBase.vue')
  }
]

export default ReactiveBase

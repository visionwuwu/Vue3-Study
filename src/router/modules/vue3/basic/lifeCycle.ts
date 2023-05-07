import type { AppRouteRecordRaw } from '../../../types'

// vue基础-生命周期
const LifeCycle: Array<AppRouteRecordRaw> = [
  {
    path: 'lifeCycle',
    name: 'LifeCycle',
    meta: {
      title: '生命周期',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/lifeCycle.vue')
  }
]

export default LifeCycle

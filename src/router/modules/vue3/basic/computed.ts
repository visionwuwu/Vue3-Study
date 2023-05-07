import type { AppRouteRecordRaw } from '../../../types'

// vue基础-计算属性
const ComputedRoutes: Array<AppRouteRecordRaw> = [
  {
    path: 'computedRoutes',
    name: 'Computed',
    meta: {
      title: '计算属性',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/computed.vue')
  }
]

export default ComputedRoutes

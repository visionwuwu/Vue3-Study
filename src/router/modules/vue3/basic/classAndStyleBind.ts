import type { AppRouteRecordRaw } from '../../../types'

// vue基础-类和样式绑定
const ClassAndStyleBind: Array<AppRouteRecordRaw> = [
  {
    path: 'classAndStyleBind',
    name: 'ClassAndStyleBind',
    meta: {
      title: '类和样式绑定',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/classAndStyleBind.vue')
  }
]

export default ClassAndStyleBind

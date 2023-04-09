import type { AppRouteRecordRaw } from '../../../types'

// vue基础-模板语法
const CssModule: Array<AppRouteRecordRaw> = [
  {
    path: 'cssModules',
    name: 'CssModules',
    meta: {
      title: 'cssModules',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/cssModule.vue')
  }
]

export default CssModule

import type { AppRouteRecordRaw } from '../../../types'

// vue基础-模板语法
const CssScoped: Array<AppRouteRecordRaw> = [
  {
    path: 'cssScopeds',
    name: 'CssScopeds',
    meta: {
      title: 'CssScopeds',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/cssScoped.vue')
  }
]

export default CssScoped

import type { AppRouteRecordRaw } from '../../../types'

// vue基础-模板语法
const TemplateSyntax: Array<AppRouteRecordRaw> = [
  {
    path: 'templateSyntax',
    name: 'TemplateSyntax',
    meta: {
      title: '模板语法',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/templateSyntax.vue')
  }
]

export default TemplateSyntax

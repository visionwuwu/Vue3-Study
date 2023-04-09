import type { AppRouteRecordRaw } from '../../../types'
import TemplateSyntax from './templateSyntax'
import CreateVueApp from './createVueApp'
import CssModule from './cssModule'
import CssScoped from './cssScoped'

// vue基础-模板语法
const BasicRoutes: Array<AppRouteRecordRaw> = [
  {
    path: 'basic',
    meta: {
      title: 'Vue3基础',
      icon: 'Menu'
    },
    children: [...CreateVueApp, ...TemplateSyntax, ...CssModule, ...CssScoped]
  }
]

export default BasicRoutes

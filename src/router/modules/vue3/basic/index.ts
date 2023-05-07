import type { AppRouteRecordRaw } from '../../../types'
import CreateVueApp from './createVueApp'
import TemplateSyntax from './templateSyntax'
import ReactiveBase from './reactiveBase'
import ComputedRoutes from './computed'
import ClassAndStyleBind from './classAndStyleBind'
import CssModule from './cssModule'
import CssScoped from './cssScoped'
import ConditionalRender from './conditionalRender'
import ListRender from './listRender'
import EventProcess from './eventProcess'
import FormInputBinding from './formInputBinding'
import LifeCycle from './lifeCycle'

// vue基础-模板语法
const BasicRoutes: Array<AppRouteRecordRaw> = [
  {
    path: 'basic',
    meta: {
      title: 'Vue3基础',
      icon: 'Menu'
    },
    children: [
      ...CreateVueApp,
      ...TemplateSyntax,
      ...ReactiveBase,
      ...ComputedRoutes,
      ...ClassAndStyleBind,
      ...ConditionalRender,
      ...ListRender,
      ...EventProcess,
      ...FormInputBinding,
      ...LifeCycle,
      ...CssModule,
      ...CssScoped
    ]
  }
]

export default BasicRoutes

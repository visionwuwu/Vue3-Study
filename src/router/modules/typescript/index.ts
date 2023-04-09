import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const TypeScriptRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/typescript',
    component: Layout,
    meta: {
      title: 'TypeScript学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default TypeScriptRoutes

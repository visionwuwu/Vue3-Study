import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const NodeJsRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/nodejs',
    component: Layout,
    meta: {
      title: 'Nodejs学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default NodeJsRoutes

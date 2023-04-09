import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const WebpackRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/webpack',
    component: Layout,
    meta: {
      title: 'Webpack学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default WebpackRoutes

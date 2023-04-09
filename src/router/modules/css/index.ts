import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const CssRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/css',
    component: Layout,
    meta: {
      title: 'Css学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default CssRoutes

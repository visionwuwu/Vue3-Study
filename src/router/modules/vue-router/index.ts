import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const VueRouterRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/vue-router',
    component: Layout,
    meta: {
      title: 'VueRouter学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default VueRouterRoutes

import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const PiniaRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/pinia',
    component: Layout,
    meta: {
      title: 'Pinia学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default PiniaRoutes

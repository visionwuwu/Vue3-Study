import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const HtmlRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/html',
    component: Layout,
    meta: {
      title: 'Html学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default HtmlRoutes

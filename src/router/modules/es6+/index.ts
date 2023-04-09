import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const Es6Routes: Array<AppRouteRecordRaw> = [
  {
    path: '/es6',
    component: Layout,
    meta: {
      title: 'Es6学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default Es6Routes

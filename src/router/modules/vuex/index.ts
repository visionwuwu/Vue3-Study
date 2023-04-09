import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const VuexRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/vuex',
    component: Layout,
    meta: {
      title: 'Vuex学习',
      icon: 'Menu'
    },
    children: []
  }
]

export default VuexRoutes

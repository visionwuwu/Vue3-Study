import type { AppRouteRecordRaw } from '../../types'

const Layout = () => import('layouts/index.vue')

const NotFound = () => import('views/error/404.vue')

const WhiteListRoutes: Array<AppRouteRecordRaw> = [
  {
    path: '/',
    name: 'Layouts',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: '前端已死',
          icon: 'Menu'
        },
        component: () => import('views/HomeView.vue')
      }
    ]
  },
  {
    path: '/error',
    name: 'Error',
    hidden: true,
    component: Layout,
    children: [
      {
        path: '404',
        name: 'NotFound',
        component: NotFound,
        hidden: true,
        meta: {
          title: 'NotFound'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    hidden: true,
    redirect: '/error/404'
  }
]

export default WhiteListRoutes

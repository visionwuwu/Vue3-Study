import type { AppRouteRecordRaw } from '../../types'
import Basic from './basic'

const Layout = () => import('layouts/index.vue')

// vue基础-模板语法
const Vue3Routes: Array<AppRouteRecordRaw> = [
  {
    path: '/vue3',
    component: Layout,
    meta: {
      title: 'Vue3学习',
      icon: 'Menu'
    },
    children: [...Basic]
  }
]

export default Vue3Routes

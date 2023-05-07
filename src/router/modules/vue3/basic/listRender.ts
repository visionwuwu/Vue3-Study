import type { AppRouteRecordRaw } from '../../../types'

// vue基础-列表渲染
const ListRender: Array<AppRouteRecordRaw> = [
  {
    path: 'listRender',
    name: 'ListRender',
    meta: {
      title: '列表渲染',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/listRender.vue')
  }
]

export default ListRender

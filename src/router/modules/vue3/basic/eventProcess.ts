import type { AppRouteRecordRaw } from '../../../types'

// vue基础-事件处理
const EventProcess: Array<AppRouteRecordRaw> = [
  {
    path: 'eventProcess',
    name: 'EventProcess',
    meta: {
      title: '事件处理',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/eventProcess.vue')
  }
]

export default EventProcess

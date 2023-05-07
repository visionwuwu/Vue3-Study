import type { AppRouteRecordRaw } from '../../../types'

// vue基础-表单输入绑定
const FormInputBinding: Array<AppRouteRecordRaw> = [
  {
    path: 'formInputBinding',
    name: 'FormInputBinding',
    meta: {
      title: '表单输入绑定',
      icon: 'Menu'
    },
    component: () => import('views/vue3/basic/formInputBinding.vue')
  }
]

export default FormInputBinding

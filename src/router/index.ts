import { createRouter, createWebHistory } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import {
  Vue3,
  VueRouterRoutes,
  VuexRoutes,
  PiniaRoutes,
  HtmlRoutes,
  CssRoutes,
  Es6Routes,
  NodeJsRoutes,
  TypeScriptRoutes,
  WebpackRoutes,
  WhiteList
} from './modules'

/**
 * 路由配置参数作用：
 * hidden: 如果设置为true，则侧边栏不显示当前路由，默认值为false
 * alwaysShow: 如果设置true，则总是显示为根菜单
 * name: 路由名称
 * redirect: noRedirect 如果设置为noRedirect则不跳转在面包屑导航
 *
 * meta: {
 *  roles: ['admin', 'editor'] 页面可访问的权限
 *  title: 'title' 页面标题，侧边栏title，面包屑导航名称
 *  icon: 'el-icon-' element ui icon
 *  noCache: true 如果设置为true则页面不会缓存，默认为false缓存页面
 *  breadcrumb: false 如果设置为true则不会在breadcrumd显示，默认为true
 *  activeMenu: 如果设置一个path，sidebar将会在高亮匹配项
 * }
 */
// 应用路由对象数组
export const routes: Array<AppRouteRecordRaw> = [
  ...WhiteList,
  ...Vue3,
  ...VueRouterRoutes,
  ...VuexRoutes,
  ...PiniaRoutes,
  ...HtmlRoutes,
  ...CssRoutes,
  ...Es6Routes,
  ...NodeJsRoutes,
  ...TypeScriptRoutes,
  ...WebpackRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as any
})

export default router

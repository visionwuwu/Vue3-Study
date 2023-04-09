/**
 * 增强vue-router得类型提示，编写和设计一个自己应用的路由类型系统
 */
import type { RouteRecordRaw } from 'vue-router'
// @ts-ignore
import { defineComponent } from 'vue'

// 定义路由组件类型
export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

/**
 * vue-router里面路由元信息的类型不太友好，所以我需要为我应用的路由元信息增强
 * node_modules\vue-router\dist\vue-router.d.ts
 */
export interface RouteMeta {
  roles?: string[]
  title?: string
  icon?: string
  noCache?: boolean
  breadcrumb?: boolean
  activeMenu?: string
}

/**
 * 应用路由记录
 * Omit 剔除某个类型中一部分属性
 */
export interface AppRouteRecordRaw
  extends Omit<RouteRecordRaw, 'meta' | 'component' | 'components' | 'children'> {
  name?: string
  meta?: RouteMeta
  component?: Component | string
  components?: Record<string, Component>
  children?: AppRouteRecordRaw[]
  props?: any
  fullPath?: string
  hidden?: boolean
  alwaysShow?: boolean
}

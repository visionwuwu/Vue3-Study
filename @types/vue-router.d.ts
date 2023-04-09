/**
 * 若果需要扩展原有模块的话，需要在类型声明文件中先引用原有模块，再使用 declare module 扩展原有模块
 */
// import type * as VueRouter from 'vue-router'
import 'vue-router'

declare module 'vue-router' {
  // 为了在vue模板上获得ts类型提示
  interface RouteMeta {
    roles?: string[];
    title?: string;
    icon?: string;
    noCache?: boolean;
    breadcrumb?: boolean;
    activeMenu?: string;
  }
}
/**
 * declare是用于声明存在的
  declare var/let/const用来声明全局的变量。
  declare function 用来声明全局方法(函数)
  declare class 用来声明全局类
  declare namespace 用来声明命名空间
  declare module 用来声明模块
  ...
  需要注意的是，declare与declare global它们功能是一样的。在d.ts中，使用declare即可，默认是全局的，它与declare global作用是相等的。而在模块文件中定义declare，如果想要用作全局就可以使用declare global。
 */
// 模块类型声明


// 需要export
declare global {
  // 无需export
  type GA = number

  /**
   * 模板字符串类型
   * 约定当前值中必须包含http://或者是https://才算校验成功
   */
  type HTTP = `http://${string}`
  type HTTPs = `https://${string}`

}
/** 注意即使此声明文件不需要导出任何东西，仍然需要导出一个空对象，用来告诉编译器这是一个模块的声明文件，而不是一个全局变量的声明文件。 */
export {}

// export declare type GA = string

/**
 * 如何使用
 * // 模块类型声明在b.ts中使用
 * import type GlobalType from 'global.d.ts'
 * const gA: GA = ''
 * 
 * 不作为模块 前提需要导出GA
 * import type GlobalType from 'global.d.ts'
 * const gA: GlobalType.GA = ''
 */


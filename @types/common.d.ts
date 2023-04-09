/**
 * https://www.jianshu.com/p/707a304d7752
 * ts extends（约束类型）、infer（推断类型）
 */
export type InferPromise<T> =  T extends Promise<infer U> ? U : never;

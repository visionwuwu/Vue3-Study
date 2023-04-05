/**
 * https://www.jianshu.com/p/707a304d7752
 * ts extends（约束类型）、infer（推断类型）
 */
import { InferPromise } from './common'

const p = new Promise<boolean>((resolve) => {
  resolve(false)
})

export type ResolvedType = InferPromise<typeof p>
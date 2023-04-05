export type InferPromise<T> =  T extends Promise<infer U> ? U : never;

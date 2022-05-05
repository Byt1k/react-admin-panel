// Generic for ActionTypes
type ValuesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferValuesType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<ValuesType<T>>
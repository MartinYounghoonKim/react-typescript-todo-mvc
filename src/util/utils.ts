export type IInternalProps<T> = Partial<{
  todo: T;
}>

export type IPropsFromStore<T> = {} & IInternalProps<T>;
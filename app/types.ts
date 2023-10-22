// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoaderData<T extends (...args: any) => any> = Exclude<
  Awaited<ReturnType<T>>,
  Response
>;

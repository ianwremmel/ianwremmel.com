export type LoaderData<T extends (...args: any) => any> = Exclude<
  Awaited<ReturnType<T>>,
  Response
>;

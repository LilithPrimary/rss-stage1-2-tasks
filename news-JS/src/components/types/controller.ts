export interface IOptions {
  [key: string]: string | number;
}

export type CallbackTypeGeneric<T> = (data: T) => void;

enum Endpoint {
  everything = 'everything',
  sources = 'sources'
}
export interface IEndPOptions {
  endpoint: Endpoint;
  options?: IOptions;
}
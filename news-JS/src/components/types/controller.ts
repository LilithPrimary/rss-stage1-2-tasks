export interface IOptions {
  [key: string]: string | number;
}

export type CallbackTypeGeneric<T> = (data: T) => void;

export type Endpoint = 'everything' | 'sources';

export interface IEndPOptions {
  endpoint: Endpoint;
  options?: IOptions;
}

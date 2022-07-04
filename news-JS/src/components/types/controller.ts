export type IOptions = {
  [key: string]: string | number;
}

export type GFoo<T> = (data: T) => void;

export type Endpoint = 'everything' | 'sources';

export interface IEndPOptions {
  endpoint: Endpoint;
  options?: IOptions;
}
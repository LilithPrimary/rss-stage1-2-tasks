export type IOptions = Record<string, string | number>;


export type CallbackTypeGeneric<T> = (data: T) => void;

export type Endpoint = 'everything' | 'sources';

export interface IEndpointOptions {
  endpoint: Endpoint;
  options?: IOptions;
}

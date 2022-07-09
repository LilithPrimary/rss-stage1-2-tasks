export interface IOptions {
  [key: string]: string | number;
}

export type CallbackTypeGeneric<T> = (data: T) => void;

// enum EndpointOptions {
//   everything = 'everything',
//   sources = 'sources'
// }

// export type Endpoint = EndpointOptions;


export type Endpoint = 'everything' | 'sources';
export interface IEndPOptions {
  endpoint: Endpoint;
  options?: IOptions;
}
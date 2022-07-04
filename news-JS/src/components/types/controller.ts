export type IOptions = {
  [key: string]: string | number;
}

export type GFoo<T> = (data: T) => void;

export interface IEndPOptions {
  endpoint: "everything" | "sources";
  options?: IOptions;
}
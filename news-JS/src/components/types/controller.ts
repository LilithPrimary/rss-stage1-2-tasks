export type IApiKey = {
  apiKey: string;
}

export type GFoo<T> = (data: T) => void;
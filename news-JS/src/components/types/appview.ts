import { ISources } from './sources';
import { INewsData } from './data';

type Status = 'ok' | 'error';
export interface IDrawNewsData {
  articles: INewsData[];
  status: Status;
  code?: string;
  message?: string;
  totalResults: number;
}

export interface IDrawSourcesData {
  sources: ISources[];
  status: Status;
  code?: string;
  message?: string;
}
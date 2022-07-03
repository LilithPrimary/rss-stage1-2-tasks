import  { ISources } from './sources';
import  { IData } from './data';

enum Status {
  "ok",
  "error"
}

export interface IDrawNewsData {
  articles: IData[];
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
import  { ISources } from './sources';
import  { IData } from './data';

export interface IDrawNewsData {
  articles: IData[];
  status: "ok" | "error";
  code?: string;
  message?: string;
  totalResults: number;
}

export interface IDrawSourcesData {
  sources: ISources[];
  status: "ok" | "error";
  code?: string;
  message?: string;
}
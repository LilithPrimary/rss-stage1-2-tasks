import  { ISources } from './sources';
import  { IData } from './data';

export interface IDrawNewsData {
  articles: IData[];
  status: string;
  totalResults: number;
}

export interface IDrawSourcesData {
  sources: ISources[];
  status: string;
}
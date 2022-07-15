interface Source {
  id: string | null;
  name: string;
}

export interface INewsData {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string | null;
}
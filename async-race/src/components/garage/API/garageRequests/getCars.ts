import { ICar } from 'types/ICar';

export async function getCars(url: string, page: number) {
  const response = await fetch(`${url}garage?_limit=7&_page=${page}`);

  const elementsAmount = <string>response.headers.get('X-Total-Count');

  const data = (await response.json()) as ICar[];

  return {
    cars: data,
    count: elementsAmount,
  };
}
import { ICar } from '../../../types/ICar';

export async function getCar(url: string, id: number) {
  const response = await fetch(`${url}garage/${id}`);
  const data = (await response.json()) as ICar;
  return data;
}
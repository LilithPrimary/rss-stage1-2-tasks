import { IURLSearchParams } from 'types/IURLSearchParams';

export async function createCar(url: string, { body }: IURLSearchParams) {
  const response = await fetch(`${url}garage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return response;
}
import { IURLSearchParams } from 'types/IURLSearchParams';

export async function updateCar(url: string, { body, id = 0 }: IURLSearchParams) {
  const response = await fetch(`${url}garage/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return response;
}
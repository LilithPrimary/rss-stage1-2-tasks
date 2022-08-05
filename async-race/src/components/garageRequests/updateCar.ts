import { IRequest } from 'components/types/IRequest';

export async function updateCar(url: string, { body, id = 0 }: IRequest) {
  const response = await fetch(`${url}garage/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return response;
}
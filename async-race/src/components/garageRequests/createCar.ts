import { IRequest } from 'components/types/IRequest';

export async function createCar(url: string, { options = '', body }: IRequest) {
  const response = await fetch(`${url}garage?${options}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return response;
}
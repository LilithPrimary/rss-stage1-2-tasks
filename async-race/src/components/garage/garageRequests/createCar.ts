import { IGarageRequestOptions } from 'components/types/IGarageRequestOptions';

export async function createCar(url: string, { body }: IGarageRequestOptions) {
  const response = await fetch(`${url}garage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return response;
}
import { IRequest } from 'components/types/IRequest';

export async function getCars(url: string, { options = '' }: IRequest) {
  const response = await fetch(`${url}garage?${options}`);
  return response;
}
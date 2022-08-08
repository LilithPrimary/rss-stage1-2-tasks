import { IGarageRequestOptions } from 'components/types/IGarageRequestOptions';

export async function getCars(url: string, { options = '' }: IGarageRequestOptions) {
  const response = await fetch(`${url}garage?${options}_limit=7&_page=1`);
  return response;
}
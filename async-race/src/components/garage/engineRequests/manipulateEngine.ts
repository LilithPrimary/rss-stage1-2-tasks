import { IGarageRequestOptions } from 'components/types/IGarageRequestOptions';

export async function manipulateEngine(url: string, { options = '', id = 0 }: IGarageRequestOptions) {
  const response = await fetch(`${url}engine?id=${id}&status=${options}`, {
    method: 'PATCH',
  });
  return response;
}
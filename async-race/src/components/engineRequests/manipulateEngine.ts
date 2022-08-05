import { IRequest } from 'components/types/IRequest';

export async function manipulateEngine(url: string, { options = '', id = 0 }: IRequest) {
  const response = await fetch(`${url}engine?id=${id}&status=${options}`, {
    method: 'PATCH',
  });
  return response;
}
import { IStartInfo } from 'types/IStartInfo';
import { IURLSearchParams } from 'types/IURLSearchParams';

export async function manipulateEngine(url: string, { options = '', id = 0 }: IURLSearchParams) {
  const response = await fetch(`${url}engine?id=${id}&status=${options}`, {
    method: 'PATCH',
  });
  const data = (await response.json()) as IStartInfo;
  return data;
}
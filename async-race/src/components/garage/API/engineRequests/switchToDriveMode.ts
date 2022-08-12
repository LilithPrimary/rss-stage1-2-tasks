import { IURLSearchParams } from 'types/IURLSearchParams';

export async function switchToDriveMode(url: string, { options = '', id = 0 }: IURLSearchParams) {
  const response = await fetch(`${url}engine?id=${id}&status=${options}`, {
    method: 'PATCH',
  });
  return response;
}
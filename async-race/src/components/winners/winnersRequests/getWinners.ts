import { IWinnerBody } from 'components/types/IWinnerRequestOptions';

export async function getWinners(url: string, page = 1) {
  const response = await fetch(`${url}winners?page=${page}`);
  const data = (await response.json()) as IWinnerBody[];
  return data;
}
import { IWinnerBody } from 'components/types/IWinnerRequestOptions';

export async function getWinners(url: string, page: number, options: string) {
  const response = await fetch(`${url}winners?page=${page}&${options}`);
  const data = (await response.json()) as IWinnerBody[];
  return data;
}
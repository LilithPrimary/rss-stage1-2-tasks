import { IWinnerBody } from 'components/types/IWinnerRequestOptions';

export async function getWinner(url: string, id: number) {
  const response = await fetch(`${url}winners/${id}`);
  const data = (await response.json()) as IWinnerBody;
  return data;
}
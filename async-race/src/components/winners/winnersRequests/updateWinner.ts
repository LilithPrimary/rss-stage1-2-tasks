import { IWinnerBody } from 'types/IWinnerRequestOptions';
import { getWinner } from './getWinner';

export async function updateWinner(url: string, body: IWinnerBody) {
  const resp = await getWinner(url, body.id);
  const winner = (await resp.json()) as IWinnerBody;
  const response = await fetch(`${url}winners/${body.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      wins: winner.wins + 1,
      time: body.time < winner.time ? body.time : winner.time,
    }),
  });
  return response;
}
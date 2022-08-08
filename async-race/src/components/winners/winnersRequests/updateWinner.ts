import { IWinnerBody } from 'components/types/IWinnerRequestOptions';
import { getWinner } from './getWinner';

export async function updateWinner(url: string, body: IWinnerBody) {
  const winner = await getWinner(url, body.id);
  console.log('update was: ', winner);
  const response = await fetch(`${url}winners/${body.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      wins: winner.wins + 1,
      time: body.time < winner.time ? body.time : winner.time,
    }),
  });
  console.log('update is: ', await response.json());
  return response;
}
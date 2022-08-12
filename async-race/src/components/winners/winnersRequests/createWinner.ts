import { IWinnerBody } from 'types/IWinnerRequestOptions';
import { updateWinner } from './updateWinner';

export async function createWinner(url: string, body: IWinnerBody) {
  const response = await fetch(`${url}winners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (response.status === 500) {
    await updateWinner(url, body);
  }
  return response;
}
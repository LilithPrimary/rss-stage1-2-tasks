import { URL } from '../app';
import { createRow } from './createRow';
import { getWinners } from './winnersRequests/getWinners';

export const createWinnersArray = async () => {
  const winners = await getWinners(URL, 1);
  const rows = winners.map((el, i) => createRow(el, i));
  return Promise.all(rows);
};
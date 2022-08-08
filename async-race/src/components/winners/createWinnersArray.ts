import { URL } from '../app';
import { createRow } from './createRow';
import { getWinners } from './winnersRequests/getWinners';

export const createWinnersArray = async (options: string, page = 1) => {
  const winners = await getWinners(URL, page, options);
  const rows = winners.map((el) => createRow(el));
  return Promise.all(rows);
};
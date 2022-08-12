import { IWinnerBody } from 'components/types/IWinnerRequestOptions';
import { URL } from '../Constants/URL';
import { createRow } from './view/createRow';
import { getWinners } from './winnersRequests/getWinners';

export const createWinnersArray = async (options: string, page = 1) => {
  const pageLimit = 10;
  const response = await getWinners(URL, page.toString(), options, pageLimit.toString());
  const winners = (await response.json()) as IWinnerBody[];
  const rows = winners.map((el) => createRow(el));
  return {
    rows: Promise.all(rows),
    count: <string>response.headers.get('X-Total-Count'),
  };
};
import { IWinnerBody } from 'types/IWinnerRequestOptions';
import { URL } from '../../constants/URL';
import { WINNERS_PAGE_LIMIT } from './Constans/winnersPageLimit';
import { createRow } from './view/createRow';
import { getWinners } from './winnersRequests/getWinners';

export const createWinnersArray = async (options: string, page = 1) => {
  const response = await getWinners(URL, page.toString(), options, WINNERS_PAGE_LIMIT.toString());
  const winners = (await response.json()) as IWinnerBody[];
  const rows = winners.map((el) => createRow(el));
  return {
    rows: Promise.all(rows),
    count: <string>response.headers.get('X-Total-Count'),
  };
};
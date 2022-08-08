import { IWinnerBody } from 'components/types/IWinnerRequestOptions';
import { getCar } from '../garage/garageRequests/getCar';
import { createPageElement } from '../createPageElement';
import { URL } from '../app';

const findOutColor = async (id: number) => {
  const responce = await getCar(URL, id);
  return responce;
};

export const createRow = async (winner: IWinnerBody, i: number) => {
  const row = createPageElement('div', {
    classes: ['table__row'],
  });
  const cellN = createPageElement('div', {
    classes: ['table__cell'],
    text: (i + 1).toString(),
  });
  const cellCar = createPageElement('div', {
    classes: ['table__cell', 'material-symbols-outlined'],
    text: 'agriculture',
  });
  const carInfo = await findOutColor(winner.id);
  cellCar.style.color = carInfo.color;
  const restCells = [carInfo.name, winner.wins, winner.time].map((el) => createPageElement('div', {
    classes: ['table__cell'],
    text: el.toString(),
  }));
  row.append(cellN, cellCar, ...restCells);
  return row;
};
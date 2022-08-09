import { IWinnerBody } from 'components/types/IWinnerRequestOptions';
import { deleteWinner } from '../winners/winnersRequests/deleteWinner';
import { URL } from '../app';
import { Car } from '../CarView';
import { createCarsArray } from './createCarsArray';
import { deleteCar } from './garageRequests/deleteCar';
import { getWinners } from '../winners/winnersRequests/getWinners';

export const removeCar = async (car: Car) => {
  await deleteCar(URL, car.id);
  const response = await getWinners(URL);
  const winners = (await response.json()) as IWinnerBody[];
  winners.forEach(async (el) => {
    if (el.id === car.id) {
      await deleteWinner(URL, car.id);
    }
  });
  car.ctrl.observer.update(await createCarsArray(car.ctrl));
  await car.ctrl.winnerPage.renderWinnersTable();
};
import { deleteWinner } from '../winners/winnersRequests/deleteWinner';
import { URL } from '../app';
import { Car } from '../CarView';
import { createCarsArray } from './createCarsArray';
import { deleteCar } from './garageRequests/deleteCar';

export const removeCar = async (car: Car) => {
  await deleteCar(URL, car.id);
  await deleteWinner(URL, car.id);
  car.ctrl.observer.update(await createCarsArray(URL, car.ctrl));
  await car.ctrl.winnerPage.renderWinnersTable();
};
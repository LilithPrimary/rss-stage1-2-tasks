import { URL } from '../app';
import { Car } from '../CarView';
import { ICar } from '../types/ICar';
import { ControlPanel } from './ControlPanelView';
import { getCars } from './garageRequests/getCars';

export const createCarsArray = async (ctrl: ControlPanel) => {
  const response = await getCars(URL, ctrl.pagination.currentPage);
  const count = <string>response.headers.get('X-Total-Count');
  ctrl.carCounter.textContent = `Total amount: ${count}`;
  ctrl.pagination.setLastPage(+count);
  ctrl.pagination.setPage();
  const cars = (await response.json()) as ICar[];
  ctrl.cars = cars.map((car) => new Car(car, ctrl));
  return ctrl.cars;
};

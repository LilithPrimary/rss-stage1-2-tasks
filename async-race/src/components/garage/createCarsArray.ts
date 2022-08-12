import { URL } from '../../constants/URL';
import { Car } from './view/CarView';
import { ICar } from '../../types/ICar';
import { ControlPanel } from './ControlPanel';
import { getCars } from './API/garageRequests/getCars';

export const createCarsArray = async (ctrl: ControlPanel) => {
  let response = await getCars(URL, ctrl.pagination.currentPage);

  const count = <string>response.headers.get('X-Total-Count');

  ctrl.btns.carCounter.textContent = `Total amount: ${count}`;

  if (ctrl.pagination.setLastPage(+count)) {
    response = await getCars(URL, ctrl.pagination.currentPage);
  }

  ctrl.pagination.setPage();

  const cars = (await response.json()) as ICar[];

  ctrl.cars = cars.map((car) => new Car(car, ctrl));

  return ctrl.cars;
};
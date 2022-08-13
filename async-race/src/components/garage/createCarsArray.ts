import { ICar } from 'types/ICar';
import { URL } from '../../constants/URL';
import { Car } from './view/CarView';
import { ControlPanel } from './ControlPanel';
import { getCars } from './API/garageRequests/getCars';

const createCarInstances = (cars: ICar[], ctrl: ControlPanel) => {
  ctrl.pagination.setPage();

  ctrl.cars = cars.map((car) => new Car(car, ctrl));

  return ctrl.cars;
};

export const createCarsArray = async (ctrl: ControlPanel) => {
  const { cars, count } = await getCars(URL, ctrl.pagination.currentPage);

  ctrl.btns.carCounter.textContent = `Total amount: ${count}`;

  if (ctrl.pagination.setLastPage(+count)) {
    const newResponse = await getCars(URL, ctrl.pagination.currentPage);
    return createCarInstances(newResponse.cars, ctrl);
  }

  return createCarInstances(cars, ctrl);
};
import { Car } from '../CarView';
import { ICar } from '../types/ICar';
import { ControlPanel } from './ControlPanelView';
import { getCars } from './garageRequests/getCars';

export const createCarsArray = async (URL: string, ctrl: ControlPanel) => {
  const response = await getCars(URL, {});
  const count = <string>response.headers.get('X-Total-Count');
  ctrl.carCounter.textContent = `Total amount: ${count}`;
  const cars = (await response.json()) as ICar[];
  ctrl.cars = cars.map((car) => new Car(car, ctrl));
  return ctrl.cars;
};

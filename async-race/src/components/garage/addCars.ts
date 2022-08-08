import { IGarageRequestBody } from 'components/types/IGarageRequestBody';
import { URL } from '../app';
import { ControlPanel } from './ControlPanelView';
import { createCarsArray } from './createCarsArray';
import { createCar } from './garageRequests/createCar';

export const addCars = async (ctrls: ControlPanel, cars: IGarageRequestBody[]) => {
  await Promise.all(cars.map((car) => createCar(URL, { body: car })));
  ctrls.observer.update(await createCarsArray(URL, ctrls));
};
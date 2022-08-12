import { IGarageRequestBody } from 'components/types/IGarageRequestBody';
import { URL } from '../../Constants/URL';
import { ControlPanel } from '../ControlPanel';
import { createCarsArray } from '../createCarsArray';
import { createCar } from '../API/garageRequests/createCar';

export const addCars = async (ctrls: ControlPanel, cars: IGarageRequestBody[]) => {
  await Promise.all(cars.map((car) => createCar(URL, { body: car })));
  ctrls.observer.update(await createCarsArray(ctrls));
};
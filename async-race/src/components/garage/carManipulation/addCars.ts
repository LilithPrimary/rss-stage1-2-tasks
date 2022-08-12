import { IGarageRequestBody } from 'types/IGarageRequestBody';
import { URL } from '../../../constants/URL';
import { ControlPanel } from '../ControlPanel';
import { createCarsArray } from '../createCarsArray';
import { createCar } from '../API/garageRequests/createCar';

export const addCars = async (ctrls: ControlPanel, cars: IGarageRequestBody[]) => {
  await Promise.all(cars.map((car) => createCar(URL, { body: car })));

  createCarsArray(ctrls)
    .then(ctrls.observer.update)
    .catch(() => {
      throw new Error();
    });
};
import { Car } from '../CarView';
import { manipulateEngine } from './engineRequests/manipulateEngine';
import { URL } from '../app';
import { stopBtnDisable } from './stopBtnDisable';

const removeCarStyles = (el: HTMLElement) => {
  const car = el;
  car.style.transition = 'none';
  car.style.transform = 'none';
  car.style.left = '0';
};

export const stopCar = async (car: Car) => {
  await manipulateEngine(URL, {
    options: 'stopped',
    id: car.id,
  });
  removeCarStyles(car.carImg);
  stopBtnDisable(car);
};
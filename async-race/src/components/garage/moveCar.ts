import { Car } from '../CarView';
import { startDriving } from './startDriving';
import { startEngine } from './startEngine';
import { stopCar } from './stopCar';

export const moveCar = async (car: Car) => {
  await stopCar(car);
  await startEngine(car);
  const status = await startDriving(car);
  return status;
};
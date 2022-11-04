import { Car } from '../view/CarView';
import { startDriving } from './startDriving';
import { startEngine } from './startEngine';
import { stopBtnEnable } from '../view/stopBtnEnable';
// import { stopCar } from './stopCar';

export const moveCar = async (car: Car) => {
  // await stopCar(car);
  await startEngine(car);
  stopBtnEnable(car);
  const status = await startDriving(car);
  return status;
};

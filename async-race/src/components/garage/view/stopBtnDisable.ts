import { Car } from './CarView';

export const stopBtnDisable = (car: Car) => {
  car.startBtn.classList.remove('btn--disabled');
  car.deleteBtn.classList.remove('btn--disabled');
  car.stopBtn.classList.add('btn--disabled');
};
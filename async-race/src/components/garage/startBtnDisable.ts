import { Car } from '../CarView';

export const startBtnDisable = (car: Car) => {
  car.startBtn.classList.add('btn--disabled');
  car.stopBtn.classList.remove('btn--disabled');
};
import { Car } from '../CarView';

export const startBtnDisable = (car: Car) => {
  car.startBtn.classList.add('btn--disabled');
  car.deleteBtn.classList.add('btn--disabled');
};
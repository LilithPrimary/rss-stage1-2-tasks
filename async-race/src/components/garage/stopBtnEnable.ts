import { Car } from '../CarView';

export const stopBtnEnable = (car: Car) => car.stopBtn.classList.remove('btn--disabled');
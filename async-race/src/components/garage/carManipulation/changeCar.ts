import { Car } from 'components/garage/view/CarView';
import { rgbToHEX } from '../utils/rgbToHEX';

export const changeCar = async (car: Car) => {
  car.ctrl.btns.editWrapper.style.display = 'flex';
  car.ctrl.btns.nameEditInput.value = car.carName.textContent || '';
  car.ctrl.btns.colorEditInput.value = `#${rgbToHEX(car.carImg.style.color)}`;
  car.ctrl.editingCar = car;
};
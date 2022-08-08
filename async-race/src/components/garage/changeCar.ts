import { Car } from 'components/CarView';

const rgbToHEX = (rgb: string) => {
  const color = rgb.slice(4, rgb.length - 1).split(', ').map(Number);
  return color.map((el) => (el.toString(16).length === 1 ? `0${el.toString(16)}` : el.toString(16))).join('');
};

export const changeCar = async (car: Car) => {
  car.ctrl.editWrapper.style.display = 'flex';
  car.ctrl.nameEditInput.value = car.carName.textContent || '';
  car.ctrl.colorEditInput.value = `#${rgbToHEX(car.carImg.style.color)}`;
  car.ctrl.editingCar = car;
};
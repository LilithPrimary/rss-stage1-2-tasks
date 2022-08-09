import { Car } from '../CarView';
import { URL } from '../app';
import { switchToDriveMode } from './engineRequests/switchToDriveMode';
import { stopBtnEnable } from './stopBtnEnable';

const stopBrokenCar = (el: Car) => {
  const car = el;
  const stopPoint = car.carImg.offsetLeft;
  car.carImg.style.left = `${stopPoint}px`;
  car.carImg.style.transform = 'rotate(150deg)';
};

const setTrakLength = (car: HTMLElement) => {
  car.style.left = 'calc(100% - 100px)';
};

export async function startDriving(el: Car) {
  const car = el;
  setTrakLength(el.carImg);
  const response = await switchToDriveMode(URL, {
    options: 'drive',
    id: car.id,
  });
  stopBtnEnable(car);
  if (response.status === 500) {
    stopBrokenCar(el);
    throw Error('broke');
  }
  const carName = <string>car.carName.textContent;
  return {
    status: response.status,
    id: car.id,
    time: car.carTime,
    name: carName,
  };
}

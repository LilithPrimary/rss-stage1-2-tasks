import { Car } from 'components/CarView';

export const renderGaragePage = (cars: Car[]) => {
  const wrapper = <HTMLDivElement>document.querySelector('.cars__wrapper');
  wrapper.innerHTML = '';
  wrapper.append(...cars.map((el) => el.renderCar()));
};
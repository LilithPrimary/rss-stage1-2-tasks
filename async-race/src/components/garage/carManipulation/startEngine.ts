import { IStartInfo } from 'types/IStartInfo';
import { URL } from '../../../constants/URL';
import { Car } from '../view/CarView';
import { manipulateEngine } from '../API/engineRequests/manipulateEngine';
import { startBtnDisable } from '../view/startBtnDisable';

const calcRaceTime = (info: IStartInfo) => info.distance / info.velocity;

const setAnimationTime = (raceTime: number, el: Car) => {
  const car = el;
  car.carTime = +(raceTime / 1000).toFixed(2);
  car.carImg.style.transition = `left ${raceTime / 1.5}ms`;
};

export async function startEngine(el: Car) {
  const car = el;
  startBtnDisable(car);
  const raceInfo = await manipulateEngine(URL, {
    options: 'started',
    id: car.id,
  });
  const raceTime = calcRaceTime(raceInfo);
  setAnimationTime(raceTime, el);
  return car;
}
import { URL } from '../app';
import { Car } from '../CarView';
import { manipulateEngine } from './engineRequests/manipulateEngine';
import { startBtnDisable } from './startBtnDisable';

interface IStartInfo {
  'velocity': number;
  'distance': number;
}

const calcRaceTime = (info: IStartInfo) => info.distance / info.velocity;

const setAnimationTime = (raceTime: number, el: Car) => {
  const car = el;
  car.carTime = +(raceTime / 1000).toFixed(2);
  car.carImg.style.transition = `left ${raceTime}ms`;
};

export async function startEngine(el: Car) {
  const car = el;
  startBtnDisable(car);
  const response = await manipulateEngine(URL, {
    options: 'started',
    id: car.id,
  });
  const raceInfo = (await response.json()) as IStartInfo;
  const raceTime = calcRaceTime(raceInfo);
  setAnimationTime(raceTime, el);
  return car;
}
import { URL } from '../../Constants/URL';
import { Car } from '../view/CarView';
import { manipulateEngine } from '../API/engineRequests/manipulateEngine';
import { startBtnDisable } from '../view/startBtnDisable';

interface IStartInfo {
  'velocity': number;
  'distance': number;
}

const calcRaceTime = (info: IStartInfo) => info.distance / info.velocity;

const setAnimationTime = (raceTime: number, el: Car) => {
  const car = el;
  car.carTime = +(raceTime / 1000).toFixed(2);
  car.carImg.style.transition = `left ${raceTime / 1.5}ms`;
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
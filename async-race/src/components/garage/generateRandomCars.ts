import { MARKS, MODELS } from '../tractors';
import { addCars } from './addCars';
import { ControlPanel } from './ControlPanelView';

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const getRandomColor = () => new Array(3).fill(0).map(() => {
  const channel = Math.floor(Math.random() * 256).toString(16);
  return channel.length === 1 ? `0${channel}` : channel;
}).join('');

export const generateRandomCars = async (ctrls: ControlPanel) => {
  const carsArr = new Array(100).fill(0).map(() => ({
    name: `${getRandomItem(MARKS)} ${getRandomItem(MODELS)}`,
    color: `#${getRandomColor()}`,
  }));
  await addCars(ctrls, carsArr);
};

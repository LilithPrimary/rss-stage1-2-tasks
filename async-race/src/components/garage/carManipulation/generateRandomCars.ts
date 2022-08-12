import { MARKS, MODELS } from '../constants/tractors';
import { addCars } from './addCars';
import { ControlPanel } from '../ControlPanel';
import { getRandomItem } from '../utils/getRandomItem';
import { getRandomColor } from '../utils/getRandomColor';

export const generateRandomCars = async (ctrls: ControlPanel) => {
  const carsArr = new Array(100).fill(0).map(() => ({
    name: `${getRandomItem(MARKS)} ${getRandomItem(MODELS)}`,
    color: `#${getRandomColor()}`,
  }));
  await addCars(ctrls, carsArr);
};

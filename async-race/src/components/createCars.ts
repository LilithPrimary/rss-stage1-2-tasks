import { Car } from './CarView';
import { ICar } from './types/ICar';

export const createCars = (cars: ICar[]) => cars.map(car => new Car(car).renderCar());
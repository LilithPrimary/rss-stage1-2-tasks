import { Car } from 'components/CarView';
import { UpdateCallback } from './UpdateCallback';

export interface IObserver {
  subscribe: (callback: UpdateCallback) => void;
  unsubscribe: (callback: UpdateCallback) => void;
  update: (newValue: Car[]) => void;
  getValue: () => Car[];
}
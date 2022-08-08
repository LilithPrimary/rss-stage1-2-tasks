import { Car } from './CarView';
import { UpdateCallback } from './types/UpdateCallback';

export const Observable = () => {
  let data: Car[];
  const listeners = new Set<UpdateCallback>();

  return {
    subscribe: (callback: UpdateCallback) => {
      listeners.add(callback);
    },
    unsubscribe: (callback: UpdateCallback) => {
      listeners.delete(callback);
    },
    update: (newValue: Car[]) => {
      data = newValue;
      listeners.forEach((callback) => callback(data));
    },
    getValue: () => data,
  };
};
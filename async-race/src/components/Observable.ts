import { UpdateCallback } from './types/UpdateCallback';

export const Observable = <T>() => {
  let data: T;
  const listeners = new Set<UpdateCallback<T>>();

  return {
    subscribe: (callback: UpdateCallback<T>) => {
      listeners.add(callback);
    },
    unsubscribe: (callback: UpdateCallback<T>) => {
      listeners.delete(callback);
    },
    update: (newValue: T) => {
      data = newValue;
      listeners.forEach((callback) => callback(data));
    },
    getValue: () => data,
  };
};
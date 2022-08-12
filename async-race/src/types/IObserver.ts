import { UpdateCallback } from './UpdateCallback';

export interface IObserver<T> {
  subscribe: (callback: UpdateCallback<T>) => void;
  unsubscribe: (callback: UpdateCallback<T>) => void;
  update: (newValue: T) => void;
  getValue: () => T,
}
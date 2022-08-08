// import { Car } from '../CarView';

// export type UpdateCallback = (data: Car[]) => void;
export type UpdateCallback<T> = (data: T) => void;
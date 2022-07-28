import Card from 'components/view/CardView';
import { IFilterOptions } from './IFilterOptions';

export type FilterCallback = (e?: Element) => void;
export type SortCallback = (data: boolean) => void;
export type InputCallback = (data: string) => void;
export type SliderCallback = (value: number[]) => void;
export type ElementCallback = (element: Card) => void;
export type getLSCallback = (options: IFilterOptions, isLocalStorage: boolean) => void;
export type setLSCallback = () => IFilterOptions;

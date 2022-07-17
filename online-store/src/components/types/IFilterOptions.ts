export type SortOption = [string, boolean];

export type ColorOpton = string[];
export interface IFilterOptions {
  [key: string]: SortOption | ColorOpton | string[] | number[] | boolean[] | (number | string)[];
  sort: SortOption;
  color: ColorOpton;
  nameEn: string[];
  like: number[];
  produced: string[];
  isLike: boolean[];
  type: string[];
  price: (number | string)[];
  quantity: (number | string)[];
}
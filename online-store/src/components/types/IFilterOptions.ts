export type SortOption = [string, boolean];

export type ColorOpton = string[];
export interface IFilterOptions {
  [key: string]: SortOption | ColorOpton | string[] | number[] | boolean[];
  sort: SortOption;
  color: ColorOpton;
  nameEn: string[];
  like: number[];
  produced: string[];
  isLike: boolean[];
  type: string[]
}
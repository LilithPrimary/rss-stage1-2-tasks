export type SortOption = [string, boolean];

export type ColorOpton = string[];
export interface IFilterOptions {
  [key: string]: SortOption | ColorOpton | string[] | number[];
  sort: SortOption;
  color: ColorOpton;
  nameEn: string[];
  like: number[];
}
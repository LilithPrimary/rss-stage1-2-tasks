export type SortOption = [string, boolean];

export type ColorOpton = string[];
export interface IFilterOptions {
  sort: SortOption;
  color: ColorOpton;
  nameEn: string;
  like: number[];
}
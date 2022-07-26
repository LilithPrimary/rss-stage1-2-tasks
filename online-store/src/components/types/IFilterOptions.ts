export type SortOption = [string, boolean];
export interface IFilterOptions {
  sort: SortOption;
  color: string[];
  nameEn: string[];
  like: number[];
  produced: string[];
  isLike: boolean[];
  vegan: boolean[];
  type: string[];
  price: number[];
  quantity: number[];
}
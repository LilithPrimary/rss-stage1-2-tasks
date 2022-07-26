import { FiltersDictionary } from "components/types/FilterDictionary";
import { IFilterOptions } from "components/types/IFilterOptions";

export const getActiveFilters = (filters: FiltersDictionary, options: IFilterOptions) => Object.keys(filters)
  .filter((filterParam) => options[filterParam as keyof IFilterOptions].length)
  .map(key => filters[key as keyof FiltersDictionary]);
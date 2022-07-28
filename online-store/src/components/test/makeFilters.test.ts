import { FiltersDictionary } from 'components/types/FilterDictionary';
import { IFilterOptions } from 'components/types/IFilterOptions';
import { makeFilters } from '../controller/makeFilters';

describe('makeFilters test', () => {
  const options: IFilterOptions = {
    sort: ['string', false],
    color: [],
    nameEn: '',
    like: [],
    produced: [],
    isLike: [],
    vegan: [],
    type: [],
    price: [],
    quantity: []
  };

  const isValuesFunction = (filters: FiltersDictionary) => Object.keys(filters).every(key => typeof filters[key as keyof FiltersDictionary] === 'function')

  it('should return object with function values', () => {
    expect(isValuesFunction(makeFilters(options))).toEqual(true);
  })

})
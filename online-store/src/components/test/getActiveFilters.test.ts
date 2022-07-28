import { getActiveFilters } from '../controller/getActiveFilters';
import { IFilterOptions } from 'components/types/IFilterOptions';
import { makeFilters } from '../controller/makeFilters';

describe('getActiveFilters test', () => {
  const options1: IFilterOptions = {
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

  const options2: IFilterOptions = {
    sort: ['string', false],
    color: ['test1', 'test2'],
    nameEn: '',
    like: [],
    produced: [],
    isLike: [true],
    vegan: [],
    type: [],
    price: [],
    quantity: []
  };

  const filters = makeFilters(options1)

  it('should return empty array if no options for sort', () => {
    expect(getActiveFilters(filters, options1)).toEqual([]);
  })

  it('should return array with 2 elements for 2 filled sort options', () => {
    expect(getActiveFilters(filters, options2).length).toEqual(2);
  })

})
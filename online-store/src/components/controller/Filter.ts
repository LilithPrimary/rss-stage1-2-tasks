import Card from 'components/view/Card';
import { IFilterOptions } from 'components/types/IFilterOptions';
import { FilterFn } from 'components/types/FilterFn';
import { makeFilters } from '../controller/makeFilters';
import { getActiveFilters } from '../controller/getActiveFilters';


export default class Filter {
  constructor(public cards: Card[], public options: IFilterOptions) {
    this.cards = cards;
    this.options = options
  }

  filterCards() {

    const filters = makeFilters(this.options);

    const activeFilters: FilterFn[] = getActiveFilters(filters, this.options);

    this.cards = this.cards.filter(element => activeFilters.every(filter => filter(element)));
    return this.cards;

  }
}
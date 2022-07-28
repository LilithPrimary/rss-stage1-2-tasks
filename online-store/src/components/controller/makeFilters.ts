import Card from 'components/view/CardView';
import { FiltersDictionary } from 'components/types/FilterDictionary';
import { IFilterOptions } from 'components/types/IFilterOptions';

export const makeFilters = (options: IFilterOptions): FiltersDictionary => ({
  'color': (element: Card) => options.color.includes(element.cardInfo.color),
  'nameEn': (element: Card) => options.nameEn.includes(element.cardInfo.nameEn),
  'produced': (element: Card) => options.produced.includes(element.cardInfo.produced),
  'type': (element: Card) => options.type.includes(element.cardInfo.type),
  'isLike': (element: Card) => <boolean>element.cardInfo.isLike,
  'vegan': (element: Card) => element.cardInfo.vegan,
  'price': (element: Card) => element.cardInfo.price >= options.price[0] && element.cardInfo.price <= options.price[1],
  'quantity': (element: Card) => element.cardInfo.quantity >= options.quantity[0] && element.cardInfo.quantity <= options.quantity[1],
})
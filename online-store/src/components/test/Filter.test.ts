import Cards from "../model/Cards";
import { IFilterOptions } from "components/types/IFilterOptions";
import Filter from "../controller/Filter";

describe("Filter.filterCards method test", () => {
  let filterTest: Filter;
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
  beforeEach(() => {
    const cardsInstance = new Cards();
    cardsInstance.fillCards();
    const cards = cardsInstance.cards;
    filterTest = new Filter(cards, options);
    options.type.push('vegetable');
  })

  it('should return array with one item', () => {
    expect(filterTest.filterCards().length).toEqual(1);
  })

})
import Cards from "../model/Cards";
import { IFilterOptions } from "components/types/IFilterOptions";
import Sort from "../controller/Sort";
import Card from "../view/Card";

describe("Sort.sortByName method test", () => {
  let sortTest: Sort;
  const options: IFilterOptions = {
    sort: ['Name Sort', false],
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

  let checkingCards: Card[];

  const cardsSortByName = new Cards().fillCards().cards.sort((a, b) => a.cardInfo.nameEn.localeCompare(b.cardInfo.nameEn));

  beforeEach(() => {
    const cardsInstance = new Cards();
    cardsInstance.fillCards();
    const cards = cardsInstance.cards;
    sortTest = new Sort(cards, options.sort);
    sortTest.sortByName(true);
    checkingCards = sortTest.cardArr;
  })

  it('should sort array with card instance by name', () => {
    expect(checkingCards).toEqual(cardsSortByName);
  })

})
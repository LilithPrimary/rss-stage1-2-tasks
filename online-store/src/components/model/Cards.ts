import Card from '../view/CardView';
import { ICard } from 'components/types/ICard';
import items from './items.json';
import Sort from '../controller/Sort';
import { IFilterOptions } from 'components/types/IFilterOptions';
import Filter from '../controller/Filter';
class Cards {
  cards: Card[] = [];

  fillCards() {
    items.forEach(item => {
      const cardInfo = item as unknown as ICard;
      const card = new Card(cardInfo);
      this.cards.push(card);
    });
    return this
  }

  sort(cardsForSort: Card[], options: IFilterOptions) {
    const sortCards = new Sort(cardsForSort, options.sort);
    return sortCards.cardArr;
  }

  filter(cardsForFilter: Card[], options: IFilterOptions) {
    const filterCards = new Filter(cardsForFilter, options);
    return filterCards.filterCards();
  }

  selectCards(options: IFilterOptions) {
    const selectedCards = this.sort(this.cards, options);
    return this.filter(selectedCards, options);
  }
}

export default Cards;
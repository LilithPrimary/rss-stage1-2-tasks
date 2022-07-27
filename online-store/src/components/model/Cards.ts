import Card from '../view/Card';
import { ICard } from 'components/types/ICard';
import items from './items.json';

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

}

export default Cards;
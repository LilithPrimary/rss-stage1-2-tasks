import Card from "./Card";
import { ICard } from "components/types/ICard";
import items from "./items.json";

class Cards {
  cards: Card[] = [];

  fillCards() {
    items.forEach(el => {
      const cardInfo: ICard = <ICard>el;
      const card = new Card(cardInfo);
      this.cards.push(card);
    });
  }

}

export default Cards;
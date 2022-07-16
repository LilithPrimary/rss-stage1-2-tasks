import Card from "./Card";
import { ICard } from "components/types/ICard";
import items from "./items.json";

class Cards {
  cards: Card[] = [];

  fillCards() {
    const cardContainer = document.querySelector(".main__container") as HTMLDivElement;
    items.forEach(el => {
      const cardInfo: ICard = <ICard>el;
      const card = new Card(cardInfo);
      this.cards.push(card);
      cardContainer.append(card.card);
    });
  }

}

export default Cards;
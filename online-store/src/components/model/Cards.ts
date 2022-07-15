import Card from "./Card";
import { ICard } from "components/types/ICard";

class Cards {
  cards: Card[] = [];

  async fillCards() {
    const response: Response = await fetch('items.json');
    const data: ICard[] = await response.json();
    console.log(data);
    const cardContainer = document.querySelector(".main__container") as HTMLDivElement;
    data.forEach(el => {
      const card = new Card(el);
      this.cards.push(card);
      cardContainer.append(card.fillCard());
    });
  }

}

export default Cards;
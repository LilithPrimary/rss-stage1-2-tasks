import Card from "components/model/Card";

export default class DrawCards {
  constructor(public cards: Card[]) {
    this.cards = cards;
  }

  draw() {
    const cardContainer = <HTMLDivElement>document.querySelector(".main__container");
    this.cards.forEach(el => cardContainer.append(el.card));
  }
}
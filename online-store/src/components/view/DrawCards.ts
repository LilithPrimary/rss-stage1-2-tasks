import Card from "components/model/Card";

export default class DrawCards {
  constructor(public cards: Card[]) {
    this.cards = cards;
  }

  draw() {
    const cardContainer = <HTMLDivElement>document.querySelector(".main__container");
    if (!this.cards.length) {
      const voidArrayMsg = document.createElement("span");
      voidArrayMsg.textContent = "No product fits your parameters";
      voidArrayMsg.classList.add("void-msg");
      cardContainer.append(voidArrayMsg);
    } else
      this.cards.forEach(el => cardContainer.append(el.card));
  }
}
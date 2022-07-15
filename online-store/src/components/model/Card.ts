import { ICard } from "components/types/ICard";

class Card {
  constructor(private cardInfo: ICard) {
    this.cardInfo = cardInfo;
  }

  fillCard() {
    const card: HTMLDivElement = document.createElement("div");
    card.classList.add("main__card", "card");
    const obverse: HTMLDivElement = document.createElement("div");
    obverse.classList.add("сard__obverse");
    const reverse: HTMLDivElement = document.createElement("div");
    reverse.classList.add("сard__reverse");
    const cardImg: HTMLImageElement = document.createElement("img");
    cardImg.classList.add("card__img");
    cardImg.style.backgroundImage = "url('./assets/img/sprite.jpg')";
    cardImg.style.backgroundPosition = `top -${this.cardInfo.picture.left}px left -${this.cardInfo.picture.left}px`
    const cardDescription: HTMLDivElement = document.createElement("div");
    cardDescription.classList.add("card__description");
    const cardTitle: HTMLHeadingElement = document.createElement("h3");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = `${this.cardInfo.name}`;
    const cardPrice: HTMLSpanElement = document.createElement("span");
    cardPrice.classList.add("card__price");
    cardPrice.textContent = `$${this.cardInfo.price}`;
    cardDescription.append(cardTitle, cardPrice);
    obverse.append(cardImg, cardDescription);
    card.append(obverse);

    return card;
  }
}

export default Card;
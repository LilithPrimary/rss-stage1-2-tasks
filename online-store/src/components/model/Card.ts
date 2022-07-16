import { CardValues, ICard } from "components/types/ICard";

class Card {
  public likeBtn: HTMLButtonElement = document.createElement("button");
  public cartBtn: HTMLButtonElement = document.createElement("button");
  public showMoreBtn: HTMLButtonElement = document.createElement("button");
  public card: HTMLDivElement = document.createElement("div");
  public obverse: HTMLDivElement = document.createElement("div");
  public reverse: HTMLDivElement = document.createElement("div");

  constructor(public cardInfo: ICard) {
    this.cardInfo = cardInfo;
    this.fillCard();
    this.showMore();
    this.closeShowMore();
    this.addToCart();
    this.addToLike();
  }

  fillCard() {
    this.card.classList.add("main__card", "card");
    this.obverse.classList.add("сard__obverse");
    this.reverse.classList.add("сard__reverse");
    const cardImg: HTMLDivElement = document.createElement("div");
    cardImg.classList.add("card__img");
    cardImg.style.backgroundImage = "url('./img/sprite.jpg')";
    cardImg.style.backgroundPosition = `top -${this.cardInfo.picture.top}px left -${this.cardInfo.picture.left}px`
    const cardDescription: HTMLDivElement = document.createElement("div");
    cardDescription.classList.add("card__description");
    const cardTitle: HTMLHeadingElement = document.createElement("h3");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = `${this.cardInfo.nameEn}`;
    const cardPrice: HTMLSpanElement = document.createElement("span");
    cardPrice.classList.add("card__price");
    cardPrice.textContent = `$${this.cardInfo.price}/kg`;
    [this.showMoreBtn, this.cartBtn, this.likeBtn].forEach(el => el.classList.add("button"));
    this.showMoreBtn.textContent = "Show more";
    this.likeBtn.classList.add("card__like-btn");
    this.likeBtn.innerHTML =
      `<svg class="card__like-img">
        <use xlink:href="img/sprite.svg#like"></use>
      </svg>`;
    this.cartBtn.classList.add("card__cart-btn");
    this.cartBtn.innerHTML =
      `<svg class="card__cart-img">
        <use xlink:href="img/sprite.svg#cart"></use>
      </svg>`;

    const reverseTitle: HTMLHeadingElement = document.createElement("h3");
    reverseTitle.classList.add("card__title");
    reverseTitle.textContent = `${this.cardInfo.nameEn}`;
    const itemType: HTMLSpanElement = document.createElement("span");
    itemType.classList.add("card__price");
    let type: CardValues;
    switch (true) {
      case this.cardInfo.fruit: type = "fruit"; break;
      case this.cardInfo.vegetable: type = "vegetable"; break;
      default: type = "berry";
    }
    itemType.textContent = `Type: ${type}`;
    const bestBefore: HTMLSpanElement = document.createElement("span");
    bestBefore.classList.add("card__price");
    const date = this.cardInfo.date;
    bestBefore.textContent = `Best before: ${date[0]}.${date[1]}.${date[2]}`;
    const produced: HTMLSpanElement = document.createElement("span");
    produced.classList.add("card__price");
    produced.textContent = `Produced: ${this.cardInfo.produced}`;
    const quantity: HTMLSpanElement = document.createElement("span");
    quantity.classList.add("card__price");
    quantity.textContent = `Quantity: ${this.cardInfo.quantity}kg`;

    cardDescription.append(cardTitle, cardPrice);
    this.obverse.append(cardImg, cardDescription, this.showMoreBtn, this.likeBtn, this.cartBtn);
    this.reverse.append(reverseTitle, itemType, bestBefore, produced, quantity);
    this.card.append(this.obverse, this.reverse);
    this.cardInfo.like = false;
    this.cardInfo.isInCart = false;
  }

  showMore() {
    this.showMoreBtn.addEventListener("click", () => this.spinCard());
  }

  closeShowMore() {
    this.reverse.addEventListener("click", () => this.spinCard());
  }

  addToCart() {
    this.cartBtn.addEventListener("click", () => this.cart());
  }

  addToLike() {
    this.likeBtn.addEventListener("click", () => this.like());
  }

  spinCard() {
    this.reverse.classList.toggle("card__reverse--open");
    this.obverse.classList.toggle("сard__obverse--close");
  }

  like() {
    this.likeBtn.classList.toggle("card__like-btn--checked");
    this.cardInfo.like = this.cardInfo.like ? false : true;
  }

  cart() {
    this.cartBtn.classList.toggle("card__cart-btn--checked");
    this.cardInfo.isInCart = this.cardInfo.like ? false : true;
  }

}

export default Card;
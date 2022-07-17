import Cards from "components/model/Cards";
import Card from "components/model/Card";
import Sort from "./Sort";
import DrawCards from "../view/DrawCards";
import { IFilterOptions } from "components/types/IFilterOptions";
import Filter from "./Filter";

export default class Controller {
  public cardsArray: Card[] = [];
  public cardsArea = <HTMLDivElement>document.querySelector(".main__container");
  public options: IFilterOptions = {
    sort: ["string", false],
    color: ["red"],
    nameEn: "",
    like: [],
  };

  constructor(public cards: Cards) {
    this.cards = cards;
    this.initCardsArray();
  }

  initCardsArray() {
    this.cardsArray = this.cards.cards;
    this.options.color = [];
  }

  startTracking() {
    console.log("Start tracking");
    this.sortBtns();
    this.colorFilter();
    this.cartController();
    this.likeController();
  }

  colorFilter() {
    const colorBtns = document.querySelectorAll(".color-filter__color-wrapper");
    colorBtns.forEach(el => el.addEventListener("click", el => this.color(<Element>el.target)));
  }

  sortBtns() {
    const sortNameBtns = document.querySelectorAll(".sort__name-btn");
    sortNameBtns?.forEach(el => el.addEventListener("click", () => this.startNameSort(el.classList.contains("ascending"))));
    const sortDateBtns = document.querySelectorAll(".sort__date-btn");
    sortDateBtns.forEach(el => el.addEventListener("click", () => this.startDateSort(el.classList.contains("ascending"))));
  }

  startNameSort(ascending: boolean) {
    this.options.sort = ["Name Sort", ascending];
    this.createCardsArray();
  }

  startDateSort(ascending: boolean) {
    this.options.sort = ["Date Sort", ascending];
    this.createCardsArray();
  }

  color(element: Element) {
    if (element.classList.contains("color-filter__color-wrapper--checked")) {
      element.classList.remove("color-filter__color-wrapper--checked");
      const color = <string>element.firstElementChild?.id;
      const i = this.options.color.indexOf(color);
      this.options.color.splice(i, 1);
    } else {
      element.classList.add("color-filter__color-wrapper--checked");
      const color = <string>element.firstElementChild?.id;
      this.options.color.push(color);
    }
    this.createCardsArray();
  }

  createCardsArray() {
    const sorting = new Sort(this.cards.cards, this.options.sort);
    let cards = sorting.cardArr;
    const colorsFilter = new Filter(this.cards.cards);
    cards = colorsFilter.filterCards(this.options);
    this.draw(cards);
  }

  draw(cards: Card[]) {
    console.log(cards);
    const draw = new DrawCards(cards);
    this.cardsArea.innerHTML = "";
    draw.draw();
  }

  cartController() {
    const cart = <HTMLSpanElement>document.querySelector(".header__cart-counter");
    this.cards.cards.forEach(el => el.cartBtn.addEventListener("click", () => {
      let count = this.cards.cards.filter(el => el.cardInfo.isInCart).length;
      if (count < 20 || (count === 20 && el.cardInfo.isInCart === true)) {
        console.log("add to cart");
        el.cartBtn.classList.toggle("card__cart-btn--checked");
        el.cardInfo.isInCart = el.cardInfo.isInCart ? false : true;
        count = this.cards.cards.filter(el => el.cardInfo.isInCart).length;
        cart.textContent = count.toString();
      } else {
        alert("Too much items in cart (max 20), please, delete some before adding");
      }
    }))
  }

  likeController() {
    this.cards.cards.forEach(el => el.likeBtn.addEventListener("click", () => {

      el.likeBtn.classList.toggle("card__like-btn--checked");
      el.cardInfo.like = el.cardInfo.like ? false : true;

      const cards = this.cards.cards.filter(el => el.cardInfo.like);
      cards.forEach(el => this.options.like.push(<number>el.cardInfo.id));
    }));
  }
}
import Cards from "components/model/Cards";
import Card from "components/model/Card";
import Sort from "./Sort";
import DrawCards from "../view/DrawCards";
import { IFilterOptions } from "components/types/IFilterOptions";
import Filter from "./Filter";
import { target } from 'nouislider';
import Slider from "../model/Slider";
import reset from "./reset";
import { restoreSettings } from "./restoreSettings";

export default class Controller {
  public cardsArray: Card[] = [];
  public cardsArea = <HTMLDivElement>document.querySelector(".main__container");
  public options: IFilterOptions = {
    sort: ["string", false],
    color: [],
    nameEn: [],
    like: [],
    produced: [],
    isLike: [false],
    vegan: [false],
    type: [],
    price: [],
    quantity: []
  };
  public sliderPrice = new Slider(<target>document.querySelector(".slider-price"));
  public sliderAmount = new Slider(<target>document.querySelector(".slider-amount"));

  constructor(public cards: Cards) {
    this.cards = cards;
    this.initCardsArray();
    this.initSlider();
  }

  initCardsArray() {
    this.cardsArray = this.cards.cards;
  }

  initSlider() {
    const pricesArr = <number[]>this.cards.cards.map(el => el.cardInfo.price);
    const amountArr = <number[]>this.cards.cards.map(el => el.cardInfo.quantity);
    this.sliderPrice.createSlider([Math.min(...pricesArr), Math.max(...pricesArr)]);
    this.sliderAmount.createSlider([Math.min(...amountArr), Math.max(...amountArr)]);
  }

  sliderOnChange() {
    this.sliderPrice.slider.noUiSlider?.on("update", (values) => {
      this.options.price = values;
      this.createCardsArray();
    })
    this.sliderAmount.slider.noUiSlider?.on("update", (values) => {
      this.options.quantity = values;
      this.createCardsArray();
    })
  }


  startTracking() {
    this.sortBtns();
    this.colorFilter();
    this.producedFilter();
    this.cartController();
    this.likeController();
    this.nameFilter();
    this.otherFilter();
    this.sliderOnChange();
    this.resetOptions();
    this.workWithLocalStorage();
  }

  colorFilter() {
    const colorBtns = document.querySelectorAll(".color-filter__color-wrapper");
    colorBtns.forEach(el => el.addEventListener("click", e => this.color(<Element>e.target)));
  }

  producedFilter() {
    const producedBtns = document.querySelectorAll(".produced-filter__wrapper");
    producedBtns.forEach(el => el.addEventListener("click", e => this.produced(<Element>e.target)));
  }

  otherFilter() {
    const otherFilterBtns = document.querySelectorAll(".other-filter__wrapper");
    otherFilterBtns.forEach(el => el.addEventListener("click", (e) => {
      const id = (<Element>e.target)?.id;
      this.startOtherFilter(<Element>e.target, id);
    }))
  }

  startOtherFilter(element: Element, id: string) {
    if (["isLike", "vegan"].includes(id))
      this.options[id][0] = this.options[id][0] ? false : true
    else if (this.options.type.includes(id)) {
      const i = this.options.type.indexOf(id);
      this.options.type.splice(i, 1);
    } else {
      this.options.type.push(id);
    }
    element.classList.toggle("other-filter__wrapper--checked");
    this.createCardsArray();
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

  nameFilter() {
    const input = <HTMLInputElement>document.querySelector(".name-filter__input");
    input?.addEventListener("input", () => this.startNameFilter(input.value));
  }

  startNameFilter(value: string) {
    this.options.nameEn[0] = value;
    this.createCardsArray();
  }

  color(element: Element) {
    const color = <string>element.firstElementChild?.id;
    if (element.classList.contains("color-filter__color-wrapper--checked")) {
      element.classList.remove("color-filter__color-wrapper--checked");
      const i = this.options.color.indexOf(color);
      this.options.color.splice(i, 1);
    } else {
      element.classList.add("color-filter__color-wrapper--checked");
      this.options.color.push(color);
    }
    this.createCardsArray();
  }

  produced(element: Element) {
    const country = <string>element.firstElementChild?.id;
    if (element.classList.contains("produced-filter__wrapper--checked")) {
      element.classList.remove("produced-filter__wrapper--checked");
      const i = this.options.produced.indexOf(country);
      this.options.produced.splice(i, 1);
    } else {
      element.classList.add("produced-filter__wrapper--checked");
      this.options.produced.push(country);
    }
    this.createCardsArray();
  }

  createCardsArray() {
    const sorting = new Sort(this.cards.cards, this.options.sort);
    let cards = sorting.cardArr;
    const optionsFilter = new Filter(this.cards.cards, this.options);
    cards = optionsFilter.filterCards();
    cards = optionsFilter.filterByValue();
    cards = optionsFilter.slidersFilter();
    this.draw(cards);
  }

  draw(cards: Card[]) {
    const draw = new DrawCards(cards);
    this.cardsArea.innerHTML = "";
    draw.draw();
  }

  cartController() {
    const alert = document.createElement("h6");
    alert.textContent = "Too much items in cart (max 20), please, delete some before adding";
    alert.classList.add("alert");
    alert.style.display = "none";
    document.body.append(alert);
    const cart = <HTMLSpanElement>document.querySelector(".header__cart-counter");
    this.cards.cards.forEach(el => el.cartBtn.addEventListener("click", () => {
      let count = this.cards.cards.filter(el => el.cardInfo.isInCart).length;
      if (count < 20 || (count === 20 && el.cardInfo.isInCart === true)) {
        el.cartBtn.classList.toggle("card__cart-btn--checked");
        el.cardInfo.isInCart = el.cardInfo.isInCart ? false : true;
        count = this.cards.cards.filter(el => el.cardInfo.isInCart).length;
        cart.textContent = count.toString();
      } else {
        alert.style.display = "block";
        setTimeout(() => alert.style.display = "none", 1000);
      }
    }))
  }

  likeController() {
    this.cards.cards.forEach(el => el.likeBtn.addEventListener("click", () => {
      el.likeBtn.classList.toggle("card__like-btn--checked");
      el.cardInfo.isLike = el.cardInfo.isLike ? false : true;
      const cards = this.cards.cards.filter(el => el.cardInfo.isLike);
      this.options.like = [];
      cards.forEach(el => this.options.like.push(<number>el.cardInfo.id));
      this.createCardsArray();
    }));
  }

  resetOptions() {
    const resetBtn = document.querySelector(".reset-btn");
    resetBtn?.addEventListener("click", () => reset(this.options, this.sliderAmount, this.sliderPrice));
    this.createCardsArray();
  }

  workWithLocalStorage() {
    window.addEventListener('load', () => this.getLocalStorage())
    window.addEventListener('beforeunload', () => this.setLocalStorage());
  }

  getLocalStorage() {
    if (localStorage.getItem('optionsLP')) {
      this.options = JSON.parse(<string>localStorage.getItem('optionsLP'));
      restoreSettings(this.options, this.sliderPrice, this.sliderAmount, this.cards.cards);
      this.createCardsArray();
    }
    // localStorage.clear();
  }

  setLocalStorage() {
    localStorage.setItem('optionsLP', JSON.stringify(this.options));
  }

}
import Cards from "components/model/Cards";
import Card from "components/model/Card";
import Sort from "./Sort";
import DrawCards from "../view/drawCards";
import { IFilterOptions } from "components/types/IFilterOptions";
import Filter from "./Filter";

export default class Controller {
  public cardsArray: Card[] = [];
  public cardsArea = <HTMLDivElement>document.querySelector(".main__container");
  public options: IFilterOptions = {
    colors: ["red"],
  };

  constructor(public cards: Cards) {
    this.cards = cards;
    this.initCardsArray();
  }

  initCardsArray() {
    this.cardsArray = this.cards.cards;
    this.options.colors = [];
  }

  startTracking() {
    console.log("Start tracking");
    this.sortBtns();
    this.colorFilter();
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
    const sorting = new Sort(this.cardsArray);
    sorting.sortByName(ascending);
    this.draw();
  }

  startDateSort(ascending: boolean) {
    const sorting = new Sort(this.cards.cards);
    sorting.sortByDate(ascending);
    this.draw();
  }

  color(element: Element) {
    if (element.classList.contains("color-filter__color-wrapper--checked")) {
      element.classList.remove("color-filter__color-wrapper--checked");
      const color = <string>element.firstElementChild?.id;
      const i = this.options.colors.indexOf(color);
      this.options.colors.splice(i, 1);
    } else {
      element.classList.add("color-filter__color-wrapper--checked");
      const color = <string>element.firstElementChild?.id;
      this.options.colors.push(color);
    }
    const colorsFilter = new Filter(this.cards.cards);
    this.cardsArray = colorsFilter.filter(this.options);
    this.draw();
  }

  draw() {
    console.log(this.cardsArray);
    const draw = new DrawCards(this.cardsArray);
    this.cardsArea.innerHTML = "";
    draw.draw();
  }
}
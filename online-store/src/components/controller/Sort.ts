import Card from "components/view/Card";
import { SortOption } from "components/types/IFilterOptions";

export default class Sort {

  public cardArr: Card[] = [];

  constructor(public cards: Card[], public options: SortOption) {
    this.cards = cards;
    this.options = options;
    if (options[0] === "string") {
      this.clearSort();
    }
    options[0] === "Name Sort" ? this.sortByName(options[1]) : this.sortByDate(options[1]);
  }

  clearSort() {
    this.cardArr = this.cards;
  }

  sortByName(ascending: boolean) {
    this.cardArr = this.cards.sort((a, b) => ascending ? this.compareString(a, b) : this.compareString(b, a));
  }

  sortByDate(ascending: boolean) {
    this.cardArr = this.cards.sort((a, b) => ascending ? this.compareDate(a, b) : this.compareDate(b, a));
  }

  compareDate(a: Card, b: Card) {
    return Number(new Date(a.cardInfo.date[0], a.cardInfo.date[1], a.cardInfo.date[2])) - Number(new Date(b.cardInfo.date[0], b.cardInfo.date[1], b.cardInfo.date[2]));
  }

  compareString(a: Card, b: Card) {
    return a.cardInfo.nameEn.toLowerCase().localeCompare(<string>b.cardInfo.nameEn.toLowerCase());
  }
}
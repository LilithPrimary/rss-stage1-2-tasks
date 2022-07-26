import Card from "components/model/Card";
import { SortOption } from "components/types/IFilterOptions";

export default class Sort {

  public cardArr: Card[] = [];

  constructor(public cards: Card[], public options: SortOption) {
    this.cards = cards;
    this.options = options;
    if (options[0] === "string") {
      this.voidSort();
    }
    options[0] === "Name Sort" ? this.sortByName(options[1]) : this.sortByDate(options[1]);
  }

  voidSort() {
    this.cardArr = this.cards;
  }

  sortByName(ascending: boolean) {
    this.cardArr = ascending ?
      this.cards.sort((a, b) => (<string>a.cardInfo.nameEn).toLowerCase().localeCompare((<string>b.cardInfo.nameEn).toLowerCase())) :
      this.cards.sort((a, b) => (<string>b.cardInfo.nameEn).toLowerCase().localeCompare((<string>a.cardInfo.nameEn).toLowerCase()))
  }

  sortByDate(ascending: boolean) {
    this.cardArr = ascending ?
      this.cards.sort((a, b) =>
        Number(new Date(a.cardInfo.date[0], a.cardInfo.date[1], a.cardInfo.date[2])) - Number(new Date(b.cardInfo.date[0], b.cardInfo.date[1], b.cardInfo.date[2]))) :
      this.cards.sort((a, b) =>
        Number(new Date(b.cardInfo.date[0], b.cardInfo.date[1], b.cardInfo.date[2])) - Number(new Date(a.cardInfo.date[0], a.cardInfo.date[1], a.cardInfo.date[2])));
  }
}
import Card from "components/model/Card";
import { IFilterOptions } from "components/types/IFilterOptions";

export default class Filter {
  constructor(public cards: Card[]) {
    this.cards = cards;
  }

  filterCards(options: IFilterOptions) {
    console.log(options["nameEn"]);
    ["color", "nameEn"].forEach(el => {
      if (!options[el].length) return;
      const filters = new RegExp(`(${options[el].join("|")})+`, 'i');
      this.cards = this.cards.filter(element => filters.test(<string>element.cardInfo[el]));
    });
    return this.cards;
  }
}
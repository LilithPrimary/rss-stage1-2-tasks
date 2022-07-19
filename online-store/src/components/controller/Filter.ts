import Card from "components/model/Card";
import { IFilterOptions } from "components/types/IFilterOptions";

export default class Filter {
  constructor(public cards: Card[], public options: IFilterOptions) {
    this.cards = cards;
    this.options = options
  }

  filterCards() {
    ["color", "nameEn", "produced", "type"].forEach(el => {
      if (!this.options[el].length) return;
      const filters = new RegExp(`(${this.options[el].join("|")})+`, 'i');
      this.cards = this.cards.filter(element => filters.test(<string>element.cardInfo[el]));
    });
    return this.cards;
  }

  filterByValue() {
    ["isLike", "vegan"].forEach(el => {
      if (!this.options[el][0]) return;
      this.cards = this.cards.filter(element => element.cardInfo[el]);
    })
    return this.cards;
  }

  slidersFilter() {
    ["price", "quantity"].forEach(el => {
      if (!this.options[el].length) return;
      this.cards = this.cards.filter(element => element.cardInfo[el] >= this.options[el][0] && element.cardInfo[el] <= this.options[el][1]);
    })
    return this.cards;
  }
}
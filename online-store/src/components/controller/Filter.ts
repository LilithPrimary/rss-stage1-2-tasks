import Card from "components/model/Card";
import { IFilterOptions } from "components/types/IFilterOptions";

export default class Filter {
  constructor(public cards: Card[]) {
    this.cards = cards;
  }

  filterCards(options: IFilterOptions) {
    if (!options.color.length) return this.cards;
    const colors = new RegExp(`^(${options.color.join("|")})+$`);
    return this.cards.filter(el => colors.test(<string>el.cardInfo.color));
  }
}
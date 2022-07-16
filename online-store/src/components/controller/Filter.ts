import Card from "components/model/Card";
import { IFilterOptions } from "components/types/IFilterOptions";

export default class Filter {
  constructor(public cards: Card[]) {
    this.cards = cards;
  }

  filter(options: IFilterOptions) {
    if (!options.colors.length) return this.cards;
    const colors = new RegExp(`^(${options.colors.join("|")})+$`);
    return this.cards.filter(el => colors.test(<string>el.cardInfo.color));
  }
}
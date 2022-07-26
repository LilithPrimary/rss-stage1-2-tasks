import Card from "components/model/Card";
import { IFilterOptions } from "components/types/IFilterOptions";
import { ICard } from "components/types/ICard";


export default class Filter {
  constructor(public cards: Card[], public options: IFilterOptions) {
    this.cards = cards;
    this.options = options
  }

  filterCards() {
    (["color", "nameEn", "produced", "type"] as (keyof IFilterOptions)[]).forEach(el => {
      if (!this.options[el].length) {
        return this.cards;
      }
      const filters = new RegExp(`(${this.options[el].join("|")})+`, 'i');
      this.cards = this.cards.filter(element => filters.test(<string>element.cardInfo[el as keyof ICard]));
    });
    return this.cards;
  }

  filterByValue() {
    (["isLike", "vegan"] as (keyof IFilterOptions)[]).forEach(el => {
      if (!this.options[el][0]) {
        return this.cards;
      }
      this.cards = this.cards.filter(element => element.cardInfo[el as keyof ICard]);
    })
    return this.cards;
  }

  slidersFilter() {
    if (!this.options.price.length) {
      return this.cards;
    }
    this.cards = this.cards.filter(element => element.cardInfo.price >= this.options.price[0] && element.cardInfo.price <= this.options.price[1]);
    if (!this.options.price.length) {
      return this.cards;
    }
    this.cards = this.cards.filter(element => element.cardInfo.quantity >= this.options.quantity[0] && element.cardInfo.quantity <= this.options.quantity[1]);

    // (["price", "quantity"] as (keyof IFilterOptions)[]).forEach(el => {
    //   if (!this.options[el].length) {
    //     return this.cards;
    //   }
    //   this.cards = this.cards.filter(element => element.cardInfo[el as keyof ICard] >= this.options[el][0] && element.cardInfo[el as keyof ICard] <= this.options[el][1]);
    // })

    return this.cards;
  }
}
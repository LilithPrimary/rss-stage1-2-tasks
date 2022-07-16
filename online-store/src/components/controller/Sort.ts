import Card from "components/model/Card";

export default class Sort {

  constructor(public cards: Card[]) {
    this.cards = cards;
  }

  sortByName(ascending: boolean) {
    return ascending ?
      this.cards.sort((a, b) => (<string>a.cardInfo.nameEn).toLowerCase().localeCompare((<string>b.cardInfo.nameEn).toLowerCase())) :
      this.cards.sort((a, b) => (<string>b.cardInfo.nameEn).toLowerCase().localeCompare((<string>a.cardInfo.nameEn).toLowerCase()))
  }

  sortByDate(ascending: boolean) {
    return ascending ?
      this.cards.sort((a, b) =>
        Number(new Date(a.cardInfo.date[0], a.cardInfo.date[1], a.cardInfo.date[2])) - Number(new Date(b.cardInfo.date[0], b.cardInfo.date[1], b.cardInfo.date[2]))) :
      this.cards.sort((a, b) =>
        Number(new Date(b.cardInfo.date[0], b.cardInfo.date[1], b.cardInfo.date[2])) - Number(new Date(a.cardInfo.date[0], a.cardInfo.date[1], a.cardInfo.date[2])));
  }
}
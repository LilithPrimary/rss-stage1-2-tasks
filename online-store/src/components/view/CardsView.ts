import Card from 'components/view/Card';

export default class CardsView {
  constructor(public cards: Card[]) {
    this.cards = cards;
  }

  draw() {
    document.body.classList.add('preload');
    const cardContainer = <HTMLDivElement>document.querySelector('.main__container');
    if (!this.cards.length) {
      const voidArrayMsg = document.createElement('span');
      voidArrayMsg.textContent = 'No product fits your parameters';
      voidArrayMsg.classList.add('void-msg');
      cardContainer.append(voidArrayMsg);
    } else
      this.cards.forEach(el => cardContainer.append(el.card));

    setTimeout(() => document.body.classList.remove('preload'), 5000);
  }
}
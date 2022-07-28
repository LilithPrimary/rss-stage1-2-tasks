import Slider from './Slider';
import { target } from 'nouislider';
import { SortCallback, FilterCallback, InputCallback, SliderCallback, ElementCallback } from '../types/callback';
import Card from 'components/view/CardView';

export class Elements {
  public cardsArea = <HTMLDivElement>document.querySelector('.main__container');
  private sliderPrice = new Slider(<target>document.querySelector('.slider-price'));
  private sliderAmount = new Slider(<target>document.querySelector('.slider-amount'));
  private colorBtns = document.querySelectorAll('.color-filter__color-wrapper');
  private producedBtns = document.querySelectorAll('.produced-filter__wrapper');
  private otherFilterBtns = document.querySelectorAll('.other-filter__wrapper');
  private sortNameBtns = document.querySelectorAll('.sort__name-btn');
  private sortDateBtns = document.querySelectorAll('.sort__date-btn');
  private nameInput = <HTMLInputElement>document.querySelector('.name-filter__input');
  private cart = <HTMLSpanElement>document.querySelector('.header__cart-counter');
  private resetBtn = document.querySelector('.reset-btn');
  private cleanLSBtn = document.querySelector('.clean-ls-btn');

  filterRender(element: string, callback: FilterCallback) {
    switch (element) {
      case 'producedBtns':
      case 'colorBtns':
      case 'otherFilterBtns': this.btnsAction(this[element], callback); break;
    }
  }

  sortRender(element: string, callback: SortCallback) {
    switch (element) {
      case 'sortNameBtns':
      case 'sortDateBtns': this.sortBtnsAction(this[element], callback); break;
    }
  }

  inputRender(element: string, callback: InputCallback) {
    if (element === 'nameInput') this.inputAction(this[element], callback);
  }

  cartRender(cards: Card[]) {
    const alert = document.createElement('h6');
    alert.textContent = 'Too much items in cart (max 20), please, delete some before adding';
    alert.classList.add('alert');
    alert.style.display = 'none';
    document.body.append(alert);
    cards.forEach(el => el.cartBtn.addEventListener('click', () => {
      let count = cards.filter(el => el.cardInfo.isInCart).length;
      if (count < 20 || (count === 20 && el.cardInfo.isInCart === true)) {
        el.cartBtn.classList.toggle('card__cart-btn--checked');
        el.cardInfo.isInCart = el.cardInfo.isInCart ? false : true;
        count = cards.filter(el => el.cardInfo.isInCart).length;
        this.cart.textContent = count.toString();
      } else {
        alert.style.display = 'block';
        setTimeout(() => alert.style.display = 'none', 1000);
      }
    }))
  }

  resetRender(element: string, callback: FilterCallback) {
    if (element === 'resetBtn' || element === 'cleanLSBtn') {
      this[element]?.addEventListener('click', () => {
        callback();
      })
    }
  }

  sliderRender(element: 'sliderPrice' | 'sliderAmount', callback: SliderCallback) {
    this[element].slider.noUiSlider?.on('update', (values) => {
      callback(<number[]>values);
    })
  }

  likesRender(cards: Card[], callback: ElementCallback) {
    cards.forEach(el => el.likeBtn.addEventListener('click', () => {
      callback(el);
    }));
  }

  cleanCardsArea() {
    this.cardsArea.innerHTML = '';
  }

  btnsAction(elements: NodeListOf<Element>, callback: FilterCallback) {
    elements.forEach(el => el.addEventListener('click', (e) => callback(<Element>e.target)));
  }

  inputAction(element: HTMLInputElement, callback: InputCallback) {
    element.addEventListener('input', () => callback(element.value));
  }

  sortBtnsAction(elements: NodeListOf<Element>, callback: SortCallback) {
    elements.forEach(el => el.addEventListener('click', () => {
      callback(el.classList.contains('ascending'));
    }))
  }

  findSlider(element: 'sliderPrice' | 'sliderAmount') {
    return this[element];
  }

  toggleBtn(el: Element, type: 'like' | 'other') {
    switch (type) {
      case 'like': el.classList.toggle('card__like-btn--checked'); break;
      default: el.classList.toggle('other-filter__wrapper--checked');
    }
  }

  isBtnActive(el: Element, type: string) {
    switch (type) {
      case 'color': return el.classList.contains('color-filter__color-wrapper--checked');
      case 'produced': return el.classList.contains('produced-filter__wrapper--checked');
    }
  }

  addBtnClass(el: Element, type: string) {
    switch (type) {
      case 'color': el.classList.add('color-filter__color-wrapper--checked'); break;
      case 'produced': el.classList.add('produced-filter__wrapper--checked');
    }
  }

  removeBtnClass(el: Element, type: string) {
    switch (type) {
      case 'color': el.classList.remove('color-filter__color-wrapper--checked'); break;
      case 'produced': el.classList.remove('produced-filter__wrapper--checked');
    }
  }
}
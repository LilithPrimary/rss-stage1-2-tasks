import Card from 'components/view/CardView';
import Slider from './Slider';
import { IFilterOptions } from 'components/types/IFilterOptions';

export function restoreSettings(options: IFilterOptions, sliderPrice: Slider, sliderAmount: Slider, cards: Card[]) {
  console.log('restore');
  restoreSlider(sliderPrice, sliderAmount, options);
  restoreColors(options);
  restoreProducers(options);
  restoreOther(options);
  restoreLikes(options, cards);
}

function restoreSlider(sliderPrice: Slider, sliderAmount: Slider, options: IFilterOptions) {
  console.log('slider');
  sliderPrice.slider.noUiSlider?.set(options.price);
  sliderAmount.slider.noUiSlider?.set(options.quantity);
}

function restoreColors(options: IFilterOptions) {
  const colorBtns = document.querySelectorAll('.color-filter__color-wrapper');
  colorBtns.forEach(el => {
    if (options.color.includes(<string>el.id)) {
      el.classList.add('color-filter__color-wrapper--checked');
    }
  });
}

function restoreProducers(options: IFilterOptions) {
  const producedBtns = document.querySelectorAll('.produced-filter__wrapper');
  producedBtns.forEach(el => {
    if (options.produced.includes(<string>el.id)) el.classList.add('produced-filter__wrapper--checked');
  });
}

function restoreOther(options: IFilterOptions) {
  const otherBtns = document.querySelectorAll('.other-filter__wrapper');
  otherBtns.forEach(el => {
    if (el.id === 'isLike' && options.isLike[0]) {
      el.classList.add('other-filter__wrapper--checked');
    }
    if (el.id === 'vegan' && options.vegan[0]) {
      el.classList.add('other-filter__wrapper--checked');
    }
    if (options.type.includes(el.id)) {
      el.classList.add('other-filter__wrapper--checked');
    }
  });
}

function restoreLikes(options: IFilterOptions, cards: Card[]) {
  cards.forEach(el => {
    if (options.like.includes(<number>el.cardInfo.id)) {
      el.likeBtn.classList.add('card__like-btn--checked');
      el.cardInfo.isLike = true;
    }
  })
}
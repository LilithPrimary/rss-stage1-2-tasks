import Card from "components/model/Card";
import Slider from "components/model/Slider";


export function resetSoft(sliderPrice: Slider, sliderAmount: Slider) {
  resetSlider(sliderPrice, sliderAmount);
  resetColors();
  resetProducers();
  resetOther();
  resetSearch();
}

export function resetHard(cards: Card[]) {
  resetLikes(cards);
  resetCart(cards);
}

function resetSlider(sliderPrice: Slider, sliderAmount: Slider) {
  sliderPrice.slider.noUiSlider?.reset();
  sliderAmount.slider.noUiSlider?.reset();
}

function resetColors() {
  const colorBtns = document.querySelectorAll(".color-filter__color-wrapper--checked");
  colorBtns.forEach(el => el.classList.remove("color-filter__color-wrapper--checked"));
}

function resetProducers() {
  const producedBtns = document.querySelectorAll(".produced-filter__wrapper--checked");
  producedBtns.forEach(el => el.classList.remove("produced-filter__wrapper--checked"));
}

function resetOther() {
  const otherBtns = document.querySelectorAll(".other-filter__wrapper--checked");
  otherBtns.forEach(el => el.classList.remove("other-filter__wrapper--checked"));
}

function resetLikes(cards: Card[]) {
  cards.forEach(el => {
    el.likeBtn.classList.remove("card__like-btn--checked");
    el.cardInfo.isLike = false;
  });
}

function resetSearch() {
  const input = <HTMLInputElement>document.querySelector(".name-filter__input");
  input.value = "";
}

function resetCart(cards: Card[]) {
  const cart = <HTMLSpanElement>document.querySelector(".header__cart-counter");
  cart.textContent = "0";
  cards.forEach(el => el.cartBtn.classList.remove("card__cart-btn--checked"));
}
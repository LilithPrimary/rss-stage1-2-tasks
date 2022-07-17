import Slider from "components/model/Slider";
import { IFilterOptions } from "components/types/IFilterOptions";

export default function reset(options: IFilterOptions, sliderPrice: Slider, sliderAmount: Slider) {
  options.color = [];
  options.nameEn = [];
  options.produced = [];
  options.isLike = [false];
  options.vegan = [false];
  options.type = [];
  options.price = [];
  options.quantity = [];
  resetSlider(sliderPrice, sliderAmount);
  resetColors();
  resetProducers();
  resetOther();
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
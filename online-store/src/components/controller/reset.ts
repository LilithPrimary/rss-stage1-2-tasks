import Card from "components/view/Card";
import Slider from "../view/Slider";
import { IFilterOptions } from "components/types/IFilterOptions";
import { resetHard, resetSoft } from "../view/resetElements";

export default function reset(options: IFilterOptions, sliderPrice: Slider, sliderAmount: Slider, isHard: boolean, cards?: Card[]) {
  if (isHard) {
    options.sort = ["string", false];
    options.like = [];
    if (cards) {
      resetHard(cards);
    }
  }
  options.color = [];
  options.nameEn = "";
  options.produced = [];
  options.isLike = [];
  options.vegan = [];
  options.type = [];
  options.price = [];
  options.quantity = [];
  resetSoft(sliderPrice, sliderAmount);
}
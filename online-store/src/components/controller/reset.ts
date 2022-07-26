import Card from "components/model/Card";
import Slider from "components/model/Slider";
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
  options.nameEn = [];
  options.produced = [];
  options.isLike = [false];
  options.vegan = [false];
  options.type = [];
  options.price = [];
  options.quantity = [];
  resetSoft(sliderPrice, sliderAmount);
}
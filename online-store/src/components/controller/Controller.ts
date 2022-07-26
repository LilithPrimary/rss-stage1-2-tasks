import Cards from "components/model/Cards";
import Card from "components/model/Card";
import Sort from "./Sort";
import DrawCards from "../view/DrawCards";
import { IFilterOptions } from "components/types/IFilterOptions";
import Filter from "./Filter";
import reset from "./reset";
// import { restoreSettings } from "../view/restoreSettings";
import { Elements } from "../view/Elements";
import { FilterCallback } from "../types/callback";
import { localStorageGet, localStorageSet } from "../view/LocalStorageLoads";
import { restoreSettings } from "../view/restoreSettings";

export default class Controller {
  public options: IFilterOptions = {
    sort: ["string", false],
    color: [],
    nameEn: [],
    like: [],
    produced: [],
    isLike: [false],
    vegan: [false],
    type: [],
    price: [],
    quantity: []
  };
  public htmlElement = new Elements();
  public sliderPrice = this.htmlElement.findSlider("sliderPrice");
  public sliderAmount = this.htmlElement.findSlider("sliderAmount");;

  constructor(public cards: Cards) {
    this.cards = cards;
    this.initSlider();
  }

  initSlider() {
    const pricesArr = this.cards.cards.map(el => el.cardInfo.price);
    const amountArr = this.cards.cards.map(el => el.cardInfo.quantity);
    this.sliderPrice.createSlider([Math.min(...pricesArr), Math.max(...pricesArr)]);
    this.sliderAmount.createSlider([Math.min(...amountArr), Math.max(...amountArr)]);
  }

  sliderOnChange() {
    this.htmlElement.sliderRender("sliderPrice", (values: number[]) => {
      this.options.price = values;
      this.createCardsArray();
    })
    this.htmlElement.sliderRender("sliderAmount", (values: number[]) => {
      this.options.quantity = values;
      this.createCardsArray();
    })
  }


  startTracking() {
    this.workWithLocalStorage();
    this.sortBtns();
    this.initColorFilter();
    this.initProducedFilter();
    this.cartTracker();
    this.likeTracker();
    this.initNameFilter();
    this.initOtherFilter();
    this.sliderOnChange();
    this.resetOptions();
  }

  initColorFilter() {
    this.htmlElement.filterRender("colorBtns", <FilterCallback>((e) => this.color(<Element>e)));
  }

  initProducedFilter() {
    this.htmlElement.filterRender("producedBtns", <FilterCallback>((e) => this.produced(<Element>e)));
  }

  initOtherFilter() {
    this.htmlElement.filterRender("otherFilterBtns", (e) => {
      const id = e?.id as keyof IFilterOptions;
      this.startOtherFilter(<Element>e, id);
    });
  }

  startOtherFilter(element: Element, id: keyof IFilterOptions) {
    if ((["isLike", "vegan"]).includes(id)) {
      this.options[id][0] = this.options[id][0] ? false : true
    }
    else if (this.options.type.includes(id)) {
      const i = this.options.type.indexOf(id);
      this.options.type.splice(i, 1);
    } else {
      this.options.type.push(id);
    }
    this.htmlElement.toggleBtn(element, "other");
    this.createCardsArray();
  }

  sortBtns() {
    this.htmlElement.sortRender("sortNameBtns", (data: boolean) => {
      this.startNameSort(data);
    });
    this.htmlElement.sortRender("sortDateBtns", (data: boolean) => {
      this.startDateSort(data);
    });
  }

  startNameSort(ascending: boolean) {
    this.options.sort = ["Name Sort", ascending];
    this.createCardsArray();
  }

  startDateSort(ascending: boolean) {
    this.options.sort = ["Date Sort", ascending];
    this.createCardsArray();
  }

  initNameFilter() {
    this.htmlElement.inputRender("nameInput", (data: string) => {
      this.startNameFilter(data);
    })
  }

  startNameFilter(value: string) {
    this.options.nameEn[0] = value;
    this.createCardsArray();
  }

  color(element: Element) {
    const color = element.id;
    if (!color) {
      return;
    }
    if (this.htmlElement.isBtnActive(element, "color")) {
      this.htmlElement.removeBtnClass(element, "color");
      const i = this.options.color.indexOf(color);
      this.options.color.splice(i, 1);
    } else {
      this.htmlElement.addBtnClass(element, "color");
      this.options.color.push(color);
    }
    this.createCardsArray();
  }

  produced(element: Element) {
    const country = element.id;
    if (this.htmlElement.isBtnActive(element, "produced")) {
      this.htmlElement.removeBtnClass(element, "produced");
      const i = this.options.produced.indexOf(country);
      this.options.produced.splice(i, 1);
    } else {
      this.htmlElement.addBtnClass(element, "produced");
      this.options.produced.push(country);
    }
    this.createCardsArray();
  }

  createCardsArray() {
    const sorting = new Sort(this.cards.cards, this.options.sort);
    let cards = sorting.cardArr;
    const optionsFilter = new Filter(this.cards.cards, this.options);
    cards = optionsFilter.filterCards();
    cards = optionsFilter.filterByValue();
    cards = optionsFilter.slidersFilter();
    this.draw(cards);
  }

  draw(cards: Card[]) {
    const draw = new DrawCards(cards);
    this.htmlElement.cleanCardsArea();
    draw.draw();
  }

  cartTracker() {
    this.htmlElement.cartRender(this.cards.cards);
  }

  likeTracker() {
    this.htmlElement.likesRender(this.cards.cards, (el: Card) => {
      this.htmlElement.toggleBtn(el.likeBtn, "like");
      el.cardInfo.isLike = el.cardInfo.isLike ? false : true;
      const cards = this.cards.cards.filter(el => el.cardInfo.isLike);
      this.options.like = [];
      cards.forEach(el => this.options.like.push(<number>el.cardInfo.id));
      this.createCardsArray();
    });
  }

  resetOptions() {
    this.htmlElement.resetRender("resetBtn", () => {
      reset(this.options, this.sliderAmount, this.sliderPrice, false);
      this.createCardsArray();
    })
    this.htmlElement.resetRender("cleanLSBtn", () => {
      localStorage.removeItem("optionsLP");
      reset(this.options, this.sliderAmount, this.sliderPrice, true, this.cards.cards);
      this.createCardsArray();
    })
  }

  workWithLocalStorage() {
    localStorageGet((optns, isLocalStorage) => {
      console.log("getCallback", optns, isLocalStorage);
      if (isLocalStorage) {
        this.options = optns;
        restoreSettings(this.options, this.sliderPrice, this.sliderAmount, this.cards.cards);
        this.createCardsArray();
      }
    });
    localStorageSet(() => {
      return this.options;
    });
  }

  // getLocalStorage() {
  //   if (localStorage.getItem('optionsLP')) {
  //     this.options = JSON.parse(<string>localStorage.getItem('optionsLP'));
  //     restoreSettings(this.options, this.sliderPrice, this.sliderAmount, this.cards.cards);
  //     this.createCardsArray();
  //   }
  // }

  // setLocalStorage() {
  //   localStorage.setItem('optionsLP', JSON.stringify(this.options));
  // }

}
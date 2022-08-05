import { createPageElement } from './createPageElement';
import { ICar } from './types/ICar';

export class Car {

  constructor(public car: ICar) {
    this.car = car;
  }

  public startBtn = createPageElement('button', {
    classes: ['btn', 'car__btn', 'car__start-btn', 'material-symbols-outlined'],
    text: 'play_circle',
  });

  public stopBtn = createPageElement('button', {
    classes: ['btn', 'car__btn', 'car__stop-btn', 'material-symbols-outlined', 'btn--disabled'],
    text: 'stop_circle',
  });

  public editBtn = createPageElement('button', {
    classes: ['btn', 'car__btn', 'car__edit-btn', 'material-symbols-outlined'],
    text: 'edit_note',
  });

  public deleteBtn = createPageElement('button', {
    classes: ['btn', 'car__btn', 'car__delete-btn', 'material-symbols-outlined'],
    text: 'delete_forever',
  });

  public carName = createPageElement('div', {
    classes: ['car__name'],
    text: this.car.name,
  });

  public carImg = createPageElement('div', {
    classes: ['car__img', 'material-symbols-outlined'],
    text: 'agriculture',
    color: this.car.color,
  });

  public id = this.car.id;

  renderCar() {
    const carEl = createPageElement('div', {
      id: this.car.id,
      classes: ['main__car', 'car'],
    });
    const carTop = createPageElement('div', {
      classes: ['car__top'],
    });
    carTop.append(this.createBtns(), this.carName);
    carEl.append(carTop, this.createTrack());
    return carEl;
  }

  createBtns() {
    const carBtnWrapper = createPageElement('div', {
      classes: ['car__btn-wrapper'],
    });
    carBtnWrapper.append(this.startBtn, this.stopBtn, this.editBtn, this.deleteBtn);
    return carBtnWrapper;
  }

  createTrack() {
    const carTrak = createPageElement('div', {
      classes: ['car__track'],
    });
    const finishFlag = createPageElement('div', {
      classes: ['car__finish', 'material-symbols-outlined'],
      text: 'sports_score',
    });
    carTrak.append(this.carImg, finishFlag);
    return carTrak;
  }

}
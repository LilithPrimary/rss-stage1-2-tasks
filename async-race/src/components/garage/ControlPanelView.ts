import { UpdateCallback } from 'components/types/UpdateCallback';
import { Car } from '../CarView';
import { createPageElement } from '../createPageElement';
import { addCar } from './addCar';
import { generateRandomCars } from './generateRandomCars';
import { resetRace } from './resetRace';
import { setChanges } from './setChanges';
import { startRace } from './startRace';
import { WinnerTable } from '../winners/WinnerTableView';
import { PaginationBlock } from '../PaginationBlock';
import { obs } from '../types/carObserver';
import { createCarsArray } from './createCarsArray';

const setTextTypeToInput = (el: HTMLInputElement) => {
  const element = el;
  element.type = 'text';
  element.placeholder = 'name';
};

const setColorTypeToInput = (el: HTMLInputElement) => {
  const element = el;
  element.type = 'color';
};

const paginationCallback = async (ctrl: ControlPanel) => {
  ctrl.observer.update(await createCarsArray(ctrl));
};

export class ControlPanel {
  constructor(public observer: typeof obs) {
    this.observer = observer;
    this.observer.subscribe(this.setCars);
  }

  public nameInput = <HTMLInputElement>createPageElement('input', {
    classes: ['ctrls__input', 'ctrls__name-input'],
  });

  public colorInput = <HTMLInputElement>createPageElement('input', {
    classes: ['ctrls__color', 'ctrls__color-check'],
  });

  public btnCreate = createPageElement('button', {
    classes: ['btn', 'ctrl__btn', 'ctrl__create-car-btn', 'material-symbols-outlined'],
    text: 'done',
  });

  public nameEditInput = <HTMLInputElement>createPageElement('input', {
    classes: ['ctrls__input', 'ctrls__edit-input'],
  });

  public colorEditInput = <HTMLInputElement>createPageElement('input', {
    classes: ['ctrls__color', 'ctrls__edit-color-check'],
  });

  public btnEdit = createPageElement('button', {
    classes: ['btn', 'ctrl__btn', 'ctrl__edit-car-btn', 'material-symbols-outlined'],
    text: 'done',
  });

  public editWrapper = createPageElement('div', {
    classes: ['ctrls__wrapper', 'ctrls__edit'],
  });

  public btnStartRace = createPageElement('button', {
    classes: ['btn', 'ctrl__btn', 'material-symbols-outlined'],
    text: 'flag_circle',
  });

  public btnResetRace = createPageElement('button', {
    classes: ['btn', 'ctrl__btn', 'btn--disabled', 'material-symbols-outlined'],
    text: 'restart_alt',
  });

  public btnCreateRandomCars = createPageElement('button', {
    classes: ['btn', 'ctrl__btn', 'material-symbols-outlined'],
    text: 'add_circle',
  });

  public editingCar = new Car({ name: 'test', color: 'white', id: 0 }, this);

  public carCounter = createPageElement('div', {
    classes: ['ctrls__counter'],
  });

  public cars: Car[] = [];

  public racePage = createPageElement('div', {
    classes: ['garage__wrapper'],
  });

  public winnerPage = new WinnerTable();

  public pagination = new PaginationBlock(this, paginationCallback);

  renderPanel() {
    const wrapper = createPageElement('div', {
      classes: ['main__ctrls', 'ctrls'],
    });
    const createWrapper = createPageElement('div', {
      classes: ['ctrls__wrapper', 'ctrls__create'],
    });

    this.setEventListener(this.btnCreate, addCar);
    createWrapper.append(this.nameInput, this.colorInput, this.btnCreate);
    this.editWrapper.append(this.nameEditInput, this.colorEditInput, this.btnEdit);

    setTextTypeToInput(this.nameInput);
    setColorTypeToInput(this.colorInput);
    setTextTypeToInput(this.nameEditInput);
    setColorTypeToInput(this.colorEditInput);

    this.setEventListener(this.btnEdit, setChanges);
    this.editWrapper.style.display = 'none';
    wrapper.append(createWrapper, this.editWrapper, this.createCtrlBtns(), this.carCounter);
    return wrapper;
  }

  setEditValue(car: Car) {
    this.colorEditInput.value = car.carImg.style.color;
    this.nameEditInput.value = car.carName.textContent || '';
  }

  createCtrlBtns() {
    const btnsWrapper = createPageElement('div', {
      classes: ['ctrls__wrapper', 'ctrls__btns'],
    });
    this.setEventListener(this.btnStartRace, startRace);
    this.setEventListener(this.btnResetRace, resetRace);
    this.setEventListener(this.btnCreateRandomCars, generateRandomCars);
    btnsWrapper.append(this.btnStartRace, this.btnResetRace, this.btnCreateRandomCars);
    return btnsWrapper;
  }

  setEventListener(el: HTMLElement, callback: UpdateCallback<ControlPanel>) {
    el.addEventListener('click', () => callback(this));
  }

  setCars = (cars: Car[]) => {
    this.cars = cars;
  };
}
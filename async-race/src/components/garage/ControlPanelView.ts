import { IObserver } from 'components/types/IObserver';
import { Car } from '../CarView';
import { createPageElement } from '../createPageElement';
import { addCar } from './addCar';
import { resetRace } from './resetRace';
import { setChanges } from './setChanges';
import { startRace } from './startRace';

type Callback = (car: ControlPanel) => void;

const setTextTypeToInput = (el: HTMLInputElement) => {
  const element = el;
  element.type = 'text';
  element.placeholder = 'name';
};

const setColorTypeToInput = (el: HTMLInputElement) => {
  const element = el;
  element.type = 'color';
};

export class ControlPanel {
  constructor(public observer: IObserver) {
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

  renderPanel() {
    const wrapper = createPageElement('div', {
      classes: ['main__ctrls', 'ctrls'],
    });
    const createWrapper = createPageElement('div', {
      classes: ['ctrls__wrapper', 'ctrls__create'],
    });

    this.setEventListner(this.btnCreate, addCar);
    createWrapper.append(this.nameInput, this.colorInput, this.btnCreate);
    this.editWrapper.append(this.nameEditInput, this.colorEditInput, this.btnEdit);

    setTextTypeToInput(this.nameInput);
    setColorTypeToInput(this.colorInput);
    setTextTypeToInput(this.nameEditInput);
    setColorTypeToInput(this.colorEditInput);
    this.setEventListner(this.btnEdit, setChanges);
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
    this.setEventListner(this.btnStartRace, startRace);
    this.setEventListner(this.btnResetRace, resetRace);
    btnsWrapper.append(this.btnStartRace, this.btnResetRace, this.btnCreateRandomCars);
    return btnsWrapper;
  }

  setEventListner(el: HTMLElement, callback: Callback) {
    el.addEventListener('click', () => callback(this));
  }

  setCars = (cars: Car[]) => {
    this.cars = cars;
  };
}
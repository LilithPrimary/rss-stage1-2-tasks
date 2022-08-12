import { Car } from 'components/garage/view/CarView';
import { UpdateCallback } from 'types/UpdateCallback';
import { createPageElement } from '../../utils/createPageElement';
import { ControlPanel } from '../ControlPanel';

const setTextTypeToInput = (el: HTMLInputElement) => {
  const element = el;
  element.type = 'text';
  element.placeholder = 'name';
};

const setColorTypeToInput = (el: HTMLInputElement) => {
  const element = el;
  element.type = 'color';
};

export class ControlPanelView {
  constructor(private ctrls: ControlPanel) {
    this.ctrls = ctrls;
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

  public racePage = createPageElement('div', {
    classes: ['garage__wrapper'],
  });

  public carCounter = createPageElement('div', {
    classes: ['ctrls__counter'],
  });

  renderPanel() {
    const wrapper = createPageElement('div', {
      classes: ['main__ctrls', 'ctrls'],
    });
    const createWrapper = createPageElement('div', {
      classes: ['ctrls__wrapper', 'ctrls__create'],
    });
    createWrapper.append(this.nameInput, this.colorInput, this.btnCreate);
    this.editWrapper.append(this.nameEditInput, this.colorEditInput, this.btnEdit);
    setTextTypeToInput(this.nameInput);
    setColorTypeToInput(this.colorInput);
    setTextTypeToInput(this.nameEditInput);
    setColorTypeToInput(this.colorEditInput);
    this.editWrapper.style.display = 'none';
    wrapper.append(createWrapper, this.editWrapper, this.createCtrlBtns(), this.carCounter);
    return wrapper;
  }

  createCtrlBtns() {
    const btnsWrapper = createPageElement('div', {
      classes: ['ctrls__wrapper', 'ctrls__btns'],
    });
    btnsWrapper.append(this.btnStartRace, this.btnResetRace, this.btnCreateRandomCars);
    return btnsWrapper;
  }

  setListener(el: HTMLElement, callback: UpdateCallback<ControlPanel>) {
    el.addEventListener('click', () => callback(this.ctrls));
  }

  setEditValue(car: Car) {
    this.colorEditInput.value = car.carImg.style.color;
    this.nameEditInput.value = car.carName.textContent || '';
  }
}

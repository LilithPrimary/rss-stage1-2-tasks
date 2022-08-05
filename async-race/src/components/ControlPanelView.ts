import { createPageElement } from './createPageElement';

export class ControlPanel {
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

  renderPanel() {
    const wrapper = createPageElement('div', {
      classes: ['main__ctrls', 'ctrls'],
    });
    const createWrapper = createPageElement('div', {
      classes: ['ctrls__wrapper', 'ctrls__create'],
    });

    createWrapper.append(this.nameInput, this.colorInput, this.btnCreate);
    this.editWrapper.append(this.nameEditInput, this.colorEditInput, this.btnEdit);

    this.setTextTypeToInput(this.nameInput);
    this.setColorTypeToInput(this.colorInput);
    this.setTextTypeToInput(this.nameEditInput);
    this.setColorTypeToInput(this.colorEditInput);

    wrapper.append(createWrapper, this.editWrapper);
    return wrapper;
  }

  setTextTypeToInput(element: HTMLInputElement) {
    element.type = 'text';
    element.placeholder = 'name';
  }

  setColorTypeToInput(element: HTMLInputElement) {
    element.type = 'color';
  }

}
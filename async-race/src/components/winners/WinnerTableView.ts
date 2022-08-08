import './winners.css';
import { createPageElement } from '../createPageElement';
import { createWinnersArray } from './createWinnersArray';

export class WinnerTable {
  public winsSort = createPageElement('div', {
    classes: ['table__cell', 'header__cell', 'table__wins'],
    text: 'Wins',
  });

  public timeSort = createPageElement('div', {
    classes: ['table__cell', 'header__cell', 'table__wins'],
    text: 'Time',
  });

  public wrapper = createPageElement('div', {
    classes: ['win__wrapper'],
  });

  public carsWrapper = createPageElement('div', {
    classes: ['table__wrapper'],
  });

  createHeader() {
    const header = createPageElement('div', {
      classes: ['table__hearder', 'table__row'],
    });
    const cells = ['N', 'Car', 'Name'].map((el) => createPageElement('div', {
      classes: ['table__cell', 'header__cell'],
      text: el,
    }));
    header.append(...cells, this.winsSort, this.timeSort);
    return header;
  }

  createWrapper() {
    const table = createPageElement('div', {
      classes: ['win__table', 'table'],
    });
    table.append(this.createHeader(), this.carsWrapper);
    this.wrapper.append(table);
    this.wrapper.style.display = 'none';
    return this.wrapper;
  }

  async renderWinnersPage() {
    const rows = await createWinnersArray();
    this.carsWrapper.append(...rows);
    return this.createWrapper();
  }
}
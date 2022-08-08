import './winners.css';
import { createPageElement } from '../createPageElement';
import { createWinnersArray } from './createWinnersArray';

interface ISortOptions {
  sort: string,
  order: string,
}

const getOptions = (by: string, how: string) => `_sort=${by}&_order=${how}`;

const changeOrder = (options: ISortOptions) => (options.order === 'DESC' ? 'ASC' : 'DESC');

const setOptions = (button: HTMLElement, options: ISortOptions) => {
  if (button.id === options.sort) {
    options.order = changeOrder(options);
  } else {
    options.sort = button.id;
    options.order = 'ASC';
  }
};

const changeSortBtnStyle = (options: ISortOptions) => {
  if (options.sort === '') return;
  const el = document.querySelector('.desc') || document.querySelector('.asc');
  el?.classList.remove('asc', 'desc');
  document.getElementById(options.sort)?.classList.add(options.order.toLowerCase());
};

export class WinnerTable {
  public winsSort = createPageElement('div', {
    classes: ['table__cell', 'header__cell', 'table__wins'],
    text: 'Wins',
    id: 'wins',
  });

  public timeSort = createPageElement('div', {
    classes: ['table__cell', 'header__cell', 'table__wins'],
    text: 'Time',
    id: 'time',
  });

  public idSort = createPageElement('div', {
    classes: ['table__cell', 'header__cell', 'table__wins'],
    text: 'id',
    id: 'id',
  });

  public wrapper = createPageElement('div', {
    classes: ['win__wrapper'],
  });

  public carsWrapper = createPageElement('div', {
    classes: ['table__wrapper'],
  });

  public sortOptions = {
    sort: '',
    order: '',
  };

  public page = 1;

  createHeader() {
    const header = createPageElement('div', {
      classes: ['table__hearder', 'table__row'],
    });
    const cells = ['Car', 'Name'].map((el) => createPageElement('div', {
      classes: ['table__cell', 'header__cell'],
      text: el,
    }));
    header.append(this.idSort, ...cells, this.winsSort, this.timeSort);
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
    this.addListeners();
    await this.renderWinnersTable();
    return this.createWrapper();
  }

  async renderWinnersTable() {
    const options = getOptions(this.sortOptions.sort, this.sortOptions.order);
    const rows = await createWinnersArray(options, this.page);
    changeSortBtnStyle(this.sortOptions);
    this.carsWrapper.innerHTML = '';
    this.carsWrapper.append(...rows);
  }

  addListeners() {
    this.winsSort.addEventListener('click', (e) => this.changeSorting(<HTMLElement>e.target));
    this.timeSort.addEventListener('click', (e) => this.changeSorting(<HTMLElement>e.target));
    this.idSort.addEventListener('click', (e) => this.changeSorting(<HTMLElement>e.target));
  }

  async changeSorting(button: HTMLElement) {
    setOptions(button, this.sortOptions);
    await this.renderWinnersTable();
  }
}

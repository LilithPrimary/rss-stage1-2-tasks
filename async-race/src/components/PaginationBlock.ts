import { createPageElement } from './createPageElement';
import { UpdateCallback } from './types/UpdateCallback';

interface IBtnsStyle {
  btns: HTMLElement[];
  curPage: number;
  lastPage: number;
}

const setBtnsStyle = ({ btns, curPage, lastPage }: IBtnsStyle) => {
  btns.forEach((btn) => btn.classList.remove('btn--disabled'));
  if (lastPage === 0) {
    btns.forEach((btn) => btn.classList.add('btn--disabled'));
  }
  const [bntBack, btnForward] = btns;
  if (curPage === 1) {
    bntBack.classList.add('btn--disabled');
  }
  if (curPage === lastPage) {
    btnForward.classList.add('btn--disabled');
  }
};

export class PaginationBlock {
  constructor(public callback: UpdateCallback<void>) {
    this.callback = callback;
  }

  public lastPage = 1;

  public currentPage = 1;

  public backBtn = createPageElement('button', {
    classes: ['btn', 'pagination__btn', 'material-symbols-outlined', 'btn--disabled'],
    text: 'navigate_before',
  });

  public forwardBtn = createPageElement('button', {
    classes: ['btn', 'pagination__btn', 'material-symbols-outlined'],
    text: 'navigate_next',
  });

  public pageNumber = createPageElement('div', {
    classes: ['pagination__number'],
    text: '1',
  });

  renderPaginationBlock() {
    const wrapper = createPageElement('div', {
      classes: ['pagination__wrapper'],
    });
    wrapper.append(this.backBtn, this.pageNumber, this.forwardBtn);
    this.addListeners();
    return wrapper;
  }

  setCurrentPage(val: number) {
    this.currentPage = val;
    this.pageNumber.textContent = val.toString();
  }

  setLastPage(val: number) {
    const carPerPage = 7;
    this.lastPage = Math.ceil(val / carPerPage);
  }

  setPage() {
    setBtnsStyle({
      btns: [this.backBtn, this.forwardBtn],
      curPage: this.currentPage,
      lastPage: this.lastPage,
    });
    this.pageNumber.textContent = this.currentPage.toString();
  }

  addListeners() {
    this.backBtn.addEventListener('click', async () => {
      this.currentPage -= 1;
      this.callback();
    });
    this.forwardBtn.addEventListener('click', async () => {
      this.currentPage += 1;
      this.callback();
    });
  }
}

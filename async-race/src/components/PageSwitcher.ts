import { createPageElement } from './utils/createPageElement';
import { ControlPanel } from './garage/ControlPanel';
import { WinnerTable } from './winners/view/WinnerTableView';

export class PageSwitcher {
  constructor(public ctrl: ControlPanel, public winner: WinnerTable) {
    this.ctrl = ctrl;
    this.winner = winner;
  }

  public racePageBtn = createPageElement('button', {
    classes: ['btn', 'header__btn', 'btn--active'],
    text: 'race',
  });

  public winnersPageBtn = createPageElement('button', {
    classes: ['btn', 'header__btn'],
    text: 'winners',
  });

  renderSwitchBtns() {
    const switchBtnsWrapper = createPageElement('div', {
      classes: ['header__btns-wrapper'],
    });
    this.addListeners();
    switchBtnsWrapper.append(this.racePageBtn, this.winnersPageBtn);
    return switchBtnsWrapper;
  }

  addListeners() {
    this.racePageBtn.addEventListener('click', () => {
      this.switchToRacePage();
    });
    this.winnersPageBtn.addEventListener('click', () => {
      this.switchToWinnerPage();
    });
  }

  switchToRacePage() {
    this.ctrl.btns.racePage.style.display = 'flex';
    this.winner.wrapper.style.display = 'none';
    this.toggleBtnsStyle();
  }

  switchToWinnerPage() {
    this.ctrl.btns.racePage.style.display = 'none';
    this.winner.wrapper.style.display = 'flex';
    this.toggleBtnsStyle();
  }

  toggleBtnsStyle() {
    this.racePageBtn.classList.toggle('btn--active');
    this.winnersPageBtn.classList.toggle('btn--active');
  }
}
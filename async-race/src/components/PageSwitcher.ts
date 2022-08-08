import { createPageElement } from './createPageElement';
import { ControlPanel } from './garage/ControlPanelView';
import { WinnerTable } from './winners/WinnerTableView';

export class PageSwitcher {
  constructor(public ctrl: ControlPanel, public winner: WinnerTable) {
    this.ctrl = ctrl;
    this.winner = winner;
  }

  public racePageBtn = createPageElement('button', {
    classes: ['btn', 'header__btn'],
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
      console.log('race');
      this.switchToRacePage();
    });
    this.winnersPageBtn.addEventListener('click', () => {
      console.log('winner');
      this.switchToWinnerPage();
    });
  }

  switchToRacePage() {
    this.ctrl.racePage.style.display = 'flex';
    this.winner.wrapper.style.display = 'none';
  }

  switchToWinnerPage() {
    this.ctrl.racePage.style.display = 'none';
    this.winner.wrapper.style.display = 'flex';
  }
}
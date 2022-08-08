import { Car } from './CarView';
import { createPageElement } from './createPageElement';
import { renderGaragePage } from './garage/renderGaragePage';
import { PageSwitcher } from './PageSwitcher';

export async function renderPage(pageSwitcher: PageSwitcher, cars: Car[]) {
  document.body.innerHTML = `<header class="header"></header>
  <main class="main">
  </main>
  <footer class="footer">
    <div class="footer__wrapper">
      <div>© 2022</div>
      <a target="_blank" href="https://github.com/lilithprimary" class="link">LilithPrimary</a>
      <a target="_blank" href="https://rs.school/" class="link">
        <svg class="rslogo">
          <use xlink:href="img/sprite.svg#rslogo"></use>
        </svg>
      </a>
    </div>
  </footer>`;
  document.body.firstElementChild?.append(pageSwitcher.renderSwitchBtns());
  const winnerMessage = createPageElement('div', {
    classes: ['main__win-message'],
    text: 'winners',
  });
  const main = document.querySelector('.main');
  const carsWrapper = createPageElement('div', {
    classes: ['cars__wrapper'],
  });
  pageSwitcher.ctrl.racePage.append(pageSwitcher.ctrl.renderPanel(), carsWrapper, winnerMessage);
  main?.append(pageSwitcher.ctrl.racePage, await pageSwitcher.winner.renderWinnersPage());
  renderGaragePage(cars);
}

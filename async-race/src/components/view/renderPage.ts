import { Car } from '../garage/view/CarView';
import { createPageElement } from '../utils/createPageElement';
import { renderGaragePage } from '../garage/view/renderGaragePage';
import { PageSwitcher } from '../PageSwitcher';

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
          <use xlink:href="assets/img/sprite.svg#rslogo"></use>
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
  cars[0].ctrl.btns.racePage.append(cars[0].ctrl.btns.renderPanel(), carsWrapper);
  cars[0].ctrl.btns.racePage.append(winnerMessage, cars[0].ctrl.pagination.renderPaginationBlock());
  main?.append(cars[0].ctrl.btns.racePage, await pageSwitcher.winner.renderWinnersPage());
  renderGaragePage(cars);
}

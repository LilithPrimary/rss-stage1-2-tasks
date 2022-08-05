import { ControlPanel } from './ControlPanelView';
import { createPageElement } from './createPageElement';

export function renderPage(ctrlPanel: ControlPanel, cars: HTMLElement[]) {
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

  const main = document.querySelector('.main');
  const wrapper = createPageElement('div', {
    classes: ['main__wrapper'],
  });
  wrapper.append(ctrlPanel.renderPanel(), ...cars);
  main?.append(wrapper);
}
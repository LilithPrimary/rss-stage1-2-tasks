export function adaptive() {
  const menu = document.querySelector('.sources');
  const burger = document.querySelector('.header__burger');
  const buttons = document.querySelectorAll('.source__item');
  const header = document.querySelector('header');
  burger?.addEventListener('click', () => {
    menu?.classList.toggle('sources--open');
    burger.classList.toggle('header__burger--open');
    document.body.classList.toggle('block');
    header?.classList.toggle('header--open');
  })
  buttons.forEach(el => el.addEventListener('click', () => {
    close();
  }))
  document.addEventListener('click', (e) => {
    if (menu?.classList.contains('sources--open') && (<HTMLDivElement>e.target).tagName === 'HEADER') {
      close();
    }
  })
  function close(): void {
    menu?.classList.remove('sources--open');
    burger?.classList.remove('header__burger--open');
    document.body.classList.remove('block');
    header?.classList.remove('header--open');
  }
}
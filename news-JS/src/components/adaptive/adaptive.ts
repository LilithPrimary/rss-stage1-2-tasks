export function adaptive(): void {
  const menu = document.querySelector(".sources") as HTMLDivElement;
  const burger = document.querySelector(".header__burger") as HTMLDivElement;
  const buttons = document.querySelectorAll(".source__item") as NodeListOf<HTMLDivElement>;
  const header = document.querySelector("header") as HTMLDivElement; 
  burger.addEventListener("click", () => {
    menu.classList.toggle("sources--open");
    burger.classList.toggle("header__burger--open");
    document.body.classList.toggle("block");
    header.classList.toggle("header--open");
  })
  buttons.forEach(el => el.addEventListener("click", () => {
    close();
  }))
  document.addEventListener("click", (e: Event)  => {
    if (menu.classList.contains("sources--open") && (<HTMLDivElement>e.target).tagName === "HEADER") {
      close();
    }
  })
  function close():void {
    menu.classList.remove("sources--open");
    burger.classList.remove("header__burger--open");
    document.body.classList.remove("block");
    header.classList.remove("header--open");
  }
}
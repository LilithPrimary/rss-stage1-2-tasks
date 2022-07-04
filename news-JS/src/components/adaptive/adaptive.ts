export function adaptive(): void {
  const menu = document.querySelector(".sources") as HTMLDivElement;
  const burger = document.querySelector(".header__burger") as HTMLDivElement;
  const buttons = document.querySelectorAll(".source__item") as NodeListOf<HTMLDivElement>;
  console.log(buttons);
  burger.addEventListener("click", () => {
    menu.classList.toggle("sources--open");
    burger.classList.toggle("header__burger--open");
  })
  buttons.forEach(el => el.addEventListener("click", () => {
    console.log("click");
    menu.classList.remove("sources--open");
    burger.classList.remove("header__burger--open");
  }))
}
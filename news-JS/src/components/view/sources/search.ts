export class Search {

  buttons = [...(document.querySelectorAll(".source__item") as NodeListOf<HTMLDivElement>)];

  search() {
    const input = document.querySelector("input") as HTMLInputElement;

    input.addEventListener("input", () => {
      const str = input.value;
      const checked = this.buttons.filter(el => {
        const data = (el.getAttribute("data-source-id") as string).split("-").join(" ");

        return data.toLowerCase().includes(str.toLowerCase());
        });
        (document.querySelector('.sources') as HTMLDivElement).innerHTML = "";
        (document.querySelector('.sources') as HTMLDivElement).append(...checked);
      
    })
  }

}
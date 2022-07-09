export class Search {

    buttons = [...(document.querySelectorAll('.source__item') as NodeListOf<HTMLDivElement>)];

    search() {
        const input = document.querySelector('input') as HTMLInputElement;

        input.addEventListener('input', () => {
          const str = input.value;
          const checked = this.buttons.filter(el => {
            const data = el.getAttribute('data-source-id')?.split('-').join(' ');

            return data ? data.toLowerCase().includes(str.toLowerCase()) : false;
            });
            const sources = document.querySelector('.sources') as HTMLDivElement;
            sources.innerHTML = '';
            sources.append(...checked);
          
        })
    }

}
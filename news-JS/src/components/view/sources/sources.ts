import './sources.css';
import { ISources } from '../../types/sources'
import { adaptive } from '../../adaptive/adaptive';
import { Search } from './search';

class Sources {
    draw(data: ISources[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <Element>sourceItemTemp?.content.cloneNode(true);

            const itemName: HTMLSpanElement | null = sourceClone.querySelector('.source__item-name');
            if (itemName) itemName.textContent = item.name;

            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        document.querySelector('.sources')?.append(fragment);
        const search = new Search();
        search.search();
        adaptive();
    }
}

export default Sources;

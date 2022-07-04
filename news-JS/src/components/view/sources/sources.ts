import './sources.css';
import  { ISources } from '../../types/sources'
import { adaptive } from '../../adaptive/adaptive';
import { Search } from './search';

class Sources {
    draw(data: ISources[]) {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
        const search = new Search();
        search.search();
        adaptive();
    }
}

export default Sources;

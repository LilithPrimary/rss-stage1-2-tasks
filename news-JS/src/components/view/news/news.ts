import './news.css';
import { IData } from '../../types/data';

class News {
    draw(data: IData[]) {
        const news: IData[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photo: HTMLDivElement | null = newsClone.querySelector('.news__meta-photo');
            if (photo) {
                photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                    })`;
            }

            const author: HTMLDivElement | null = newsClone.querySelector('.news__meta-author');
            if (author) {
                author.textContent = item.author || item.source.name;
            }

            const metaDate: HTMLLIElement | null = newsClone.querySelector('.news__meta-date');
            if (metaDate) {
                metaDate.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
            }

            const descriptionTitle: HTMLHeadingElement | null = newsClone.querySelector('.news__description-title');
            if (descriptionTitle) descriptionTitle.textContent = item.title;

            const descriptionSource: HTMLHeadingElement | null = newsClone.querySelector('.news__description-source');
            if (descriptionSource) descriptionSource.textContent = item.source.name;

            const descriptionContent: HTMLParagraphElement | null = newsClone.querySelector('.news__description-content');
            if (descriptionContent) descriptionContent.textContent = item.description;

            const readMoreLink: HTMLAnchorElement | null = newsClone.querySelector('.news__read-more a');
            if (readMoreLink) readMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
import News from './news/news';
import Sources from './sources/sources';
import  { IDrawNewsData, IDrawSourcesData } from '../types/appview';


export class AppView {

    news = new News();
    sources = new Sources(); 

    drawNews(data: IDrawNewsData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDrawSourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

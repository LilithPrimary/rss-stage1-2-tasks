import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import  { IDrawNewsData, IDrawSourcesData } from '../types/appview';

class App {
    controller = new AppController();
    view = new AppView();

    start() {
        (document.querySelector('.sources') as HTMLDivElement)
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: IDrawNewsData) => this.view.drawNews(data)));
        this.controller.getSources((data: IDrawSourcesData) => this.view.drawSources(data));
    }
}

export default App;

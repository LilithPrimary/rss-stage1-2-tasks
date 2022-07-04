import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '16451734face4271928932b75c8a594e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

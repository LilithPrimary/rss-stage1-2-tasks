import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '16451734face4271928932b75c8a594e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

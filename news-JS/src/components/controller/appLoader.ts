import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '4acd9606faec4844a4d7b84dacfb9905', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

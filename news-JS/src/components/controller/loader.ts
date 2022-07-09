import  { CallbackTypeGeneric, IEndPOptions, IOptions, Endpoint } from '../types/controller';

class Loader {  
    constructor(public baseLink: string,
                public options: IOptions) {
            this.baseLink = baseLink;
            this.options = options;
        }

    getResp<T>( { endpoint, options = {}}: IEndPOptions, callback: CallbackTypeGeneric<T> = () => {
            console.error('No callback for GET response');
    }){
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IOptions, endpoint: Endpoint) {
        const urlOptions: IOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: Endpoint, callback: CallbackTypeGeneric<T>, options: IOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
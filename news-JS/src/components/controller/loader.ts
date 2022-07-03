import  { IApiKey } from '../types/controller';
// import  { IDrawSourcesData } from '../types/appview';

class Loader {  
    constructor(public baseLink: string,
                public options: IApiKey) {
            this.baseLink = baseLink;
            this.options = options;
        }

    getResp<T>( { endpoint, options = {}}: { endpoint: string, options?: {sources?: string} }, callback: (data: T) => void = () => {
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

    makeUrl(options: {sources?: string}, endpoint: string) {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options: {sources?: string} = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
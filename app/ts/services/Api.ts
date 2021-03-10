interface FetchArgs {
    url: string;
    options?: object;
    handler?(res: Response): Response;
    success: Function;
    error?: Function;
};

export abstract class Api {
    isOk(res: Response) {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res;
    }

    fetch({ url, success, error, handler }: FetchArgs): Promise<any> {
        return fetch(url)
            .then(res => handler ? handler(res) : this.isOk(res))
            .then(res => res.json())
            .catch(res => error && error(res))
            .then(res => success(res))
    }
}
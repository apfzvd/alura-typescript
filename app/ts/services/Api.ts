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

    async fetch({ url, success, error, handler }: FetchArgs): Promise<any> {
        try {
            const fetched = await fetch(url);
            const res = handler ? handler(fetched) : this.isOk(fetched);

            const jsonData = await res.json();

            return success(jsonData)
        } catch (err) {
            if (error) {
                return error(err)
            }
            console.log(err);
            throw new Error('Erro padrão da Api')
        }
    }
}
export function domInject(selector: string) {
    return function (target: any, key: string) {
        let element: JQuery;

        const get = function() {
            console.log('inside get')

            if (!element) {
                console.log('getting element!')
                element = $(selector);
            }

            return element;
        }

        Object.defineProperty(target, key, {
            get,
        });
    }
}
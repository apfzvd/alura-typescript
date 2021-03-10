export function throttle(ms: number = 500) {
    return function (_target: any, _key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        let timer = 0;

        descriptor.value = function (event: Event, ...args: any[]) {
            event && event.preventDefault();

            clearInterval(timer);
            timer = setTimeout(() => original.apply(this, args), ms)
        };


        return descriptor;
    }
}
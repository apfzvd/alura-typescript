export function executionTime(inSeconds: boolean = false) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        let unity = 'ms';
        let divisor = 1;

        if (inSeconds) {
            unity = 's';
            divisor = 1000;
        }

        const original = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log('----------------');
            console.log(`Método: ${key} com args: ${JSON.stringify(args)}`);
            console.log('----------------');

            const t1 = performance.now();

            const returnOriginal = original.apply(this, args);

            const t2 = performance.now();

            console.log(`Método: ${key} demorou ${(t2 - t1)/divisor}${unity} para executar`);
            
            return returnOriginal;
        };


        return descriptor
    }
}
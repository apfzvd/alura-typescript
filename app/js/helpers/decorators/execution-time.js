System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function executionTime(inSeconds = false) {
        return function (target, key, descriptor) {
            let unity = 'ms';
            let divisor = 1;
            if (inSeconds) {
                unity = 's';
                divisor = 1000;
            }
            const original = descriptor.value;
            descriptor.value = function (...args) {
                console.log('----------------');
                console.log(`Método: ${key} com args: ${JSON.stringify(args)}`);
                console.log('----------------');
                const t1 = performance.now();
                const returnOriginal = original.apply(this, args);
                const t2 = performance.now();
                console.log(`Método: ${key} demorou ${(t2 - t1) / divisor}${unity} para executar`);
                return returnOriginal;
            };
            return descriptor;
        };
    }
    exports_1("executionTime", executionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});

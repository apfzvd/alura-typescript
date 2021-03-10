System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(selector) {
        return function (target, key) {
            let element;
            const get = function () {
                console.log('inside get');
                if (!element) {
                    console.log('getting element!');
                    element = $(selector);
                }
                return element;
            };
            Object.defineProperty(target, key, {
                get,
            });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});

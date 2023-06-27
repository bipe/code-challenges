function add(a,b) { return a + b; }

const defaultMethod = (function () { // Create a closure for `registry`
    const registry = new WeakMap;
    
    return function (func, params) {
        let requiredArgs = registry.get(func);
        if (!requiredArgs) {
            const funcStr = func.toString();
            requiredArgs = funcStr
              .slice(funcStr.indexOf('(') + 1, funcStr.indexOf(')'))
              .match(/([^\s,]+)/g) || [];
        }
      
        const decoratedFunc = function (...args) {
            let calledArgs = args;
      
            for (let i = calledArgs.length; i < requiredArgs.length; i++) {
                if (calledArgs[i] === undefined) {
                    calledArgs[i] = params[requiredArgs[i]];
                }
            }
      
            return func(...calledArgs);
        };

        // Register the function we are about to return
        registry.set(decoratedFunc, requiredArgs);
        return decoratedFunc;
    };
})();

module.exports = { add, defaultMethod }

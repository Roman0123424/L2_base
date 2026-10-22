function cache(func) {
    var memory = {};

    return function() {
        var currentArgs = Array.prototype.slice.call(arguments);
        var cacheKey = JSON.stringify(currentArgs);

        if (!memory.hasOwnProperty(cacheKey)) {
            memory[cacheKey] = func.apply(this, arguments);
        }

        return memory[cacheKey];
    };
}
// 11. what is Composition? create a pipe()

function pipe(funcs) {
    return function (args) {
        let result = args;
        for (let fn of funcs) {
            result = fn.call(this, result)
        }
        return result;
    }
}

// important Link - https://whatthefuck.is/ - to learn composition
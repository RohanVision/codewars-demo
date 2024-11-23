// 6. implement basic debounce()



// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
    let timer;
    return function () {
        let context = this;
        args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(context, arguments)
        }, wait)
    }
}


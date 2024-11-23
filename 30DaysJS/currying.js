// Currying is a useful technique used in JavaScript applications.

// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example

// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }
// const curriedJoin = curry(join)
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'


function curry(fn) {
    // return function innerCurried(...args) {
    //   if(args.length >= fn.length){
    //     return fn.apply(this, args)
    //   }
    //   return (...args2) =>  innerCurried.apply(this, [...args, ...args2])
    // }
    return function innerCurry(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }
        return (...args2) => innerCurry.apply(this, [...args, ...args2])
    }
}


// https://www.linkedin.com/pulse/what-currying-javascript-arjunan-k/ - Important link to undestand Currying
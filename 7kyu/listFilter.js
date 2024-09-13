// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    let resultStr = [];
    for (let i = 0; i < l.length; i++) {
        // console.log(typeof(l[i]) === "number");
        // return typeof(i) !== "number"
        if (typeof l[i] !== "string") {
            resultStr.push(l[i]);
        }
    }
    return resultStr
}

// Second Approach
function filter_list(l) {
    return l.filter(function (e) {
        return typeof e !== 'string';
    });
}
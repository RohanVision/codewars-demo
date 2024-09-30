let arr = ["abc", "hello", "c", "d", "abc", "c"]

let obj = {}

for (let elements of arr) {
    if (!obj[elements]) {
        obj[elements] = true
    }
}

for (let key in obj) {
    console.log(key)
}
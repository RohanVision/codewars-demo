function pal(str) {
    if (str.length === 1) return true
    if (str.length === 2) return str[0] === str[1]
    if (str[0] === str.slice(-1)) return pal(str.slice(1, -1))
    return false;
}
console.log(pal("tacocat"))
console.log(pal('amanaplanacanalpanama'))
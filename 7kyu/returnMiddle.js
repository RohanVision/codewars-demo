function getMiddle(s) {
    let text_length = s.length;
    if (text_length % 2 != 0) {
        let start = (text_length - 1) / 2;
        return s.slice(start, start + 1);
    } else {
        let start = text_length / 2 - 1;
        return s.slice(start, start + 2);
    }
}

console.log(getMiddle("track"));
console.log(getMiddle("vermon"));
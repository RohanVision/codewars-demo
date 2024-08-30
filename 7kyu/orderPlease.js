function order(words) {
    if (words.length == 0) return words
    return words.split(' ').sort((first, second) => {
        return first.match(/\d/) - second.match(/\d/)
    }).join(' ');
}

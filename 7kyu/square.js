var isSquare = function (n) {
    if (Math.ceil(Math.sqrt(n)) === Math.floor(Math.sqrt(n))) {
        return true;
    } else {
        return false;
    }
}

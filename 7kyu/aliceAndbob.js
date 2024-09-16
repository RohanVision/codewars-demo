

// first my approach
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++
        }
        if (a[i] < b[i]) {
            bob++
        }
    }
    return [alice, bob]
}

// second approach

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < a.length; i++) {
        a[i] > b[i] ? alice++ : a[i] < b[i] ? bob++ : null;
    }
    return [alice, bob]
}
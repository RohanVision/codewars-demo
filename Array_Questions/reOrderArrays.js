function sort(items, newOrder) {
    for (let i = 0; i < newOrder.length; i++) {
        while (newOrder[i] != i) {
            const to = newOrder[i]
                ;[newOrder[i], newOrder[to]] = [newOrder[to], newOrder[i]];
            ;[items[i], items[to]] = [items[to], items[i]];
        }
    }
}

// const A = ['A', 'B', 'C', 'D', 'E', 'F']
// const B = [1,   5,   4,   3,   2,   0]
function sumArray(arr) {
    let count = 0;
    arr.forEach(function (element) {
        if (element.gender !== "male") count++;
    });

    for (let i = 1; i <= count; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[k].gender !== "male") {
                arr.splice(k, 1);
            }
        }
    }
    return arr
}
console.log(sumArray(
    [
        { name: "Rohan", gender: "male" },
        { name: "Rohan", gender: "Female" },
        { name: "Rohan", gender: "nonSPecfied" },
    ]
))
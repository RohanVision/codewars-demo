const x = {
    "name": "Rohan",
    "age": 32,
    "company": "Netflix",
    "city": "Mumbai",
    "designation": "UI Engineer"
}


for (let entries of Object.entries(x)) {
    console.log(entries)
}

for (let keys in x) {
    console.log(keys, x[keys])
}
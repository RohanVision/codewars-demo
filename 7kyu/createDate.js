
function createDate(date = new Date()) {
    const days = date.getDate() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return (`${days} / ${month} / ${year}  `)

}
console.log(createDate())
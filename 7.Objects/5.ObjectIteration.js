const book = {
    title : "Ego is the enemy",
    author : "Ryan Holiday",
    year : "1990",
}
// task 8
for (const key in book) {
    console.log(`${key} : ${book[key]}`);
}

// task 9 
console.log(Object.keys(book));
console.log(Object.values(book));
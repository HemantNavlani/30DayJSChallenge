const library = {
    name :"Aligarh Library",
    books:[
        {
            title : "Ego is the enemy",
            author : "Ryan Holiday",
            year : "1990"
        },
        {
            title : "The monk who sold his Ferrari",
            author : "Robin Sharma",
            year : "1985"
        },
        {
            title : "The art of talking to people",
            author : "Dale of Carnegie",
            year : "1995"
        }
    ]
}
// task 5
console.log(library);

// task 6
console.log(library.name);
library.books.map(book=>{
    console.log(book.title);
})

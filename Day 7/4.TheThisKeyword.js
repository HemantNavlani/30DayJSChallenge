// task 7
const book = {
    title : "Ego is the enemy",
    author : "Ryan Holiday",
    year : "1990",
    getTitleAndAuthor:function(){
        return `${this.title} : ${this.year}`
    }
}
console.log(book.getTitleAndAuthor())
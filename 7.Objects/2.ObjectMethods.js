// task 3

const book = {
    title : "Ego is the enemy",
    author : "Ryan Holiday",
    year : "1990",
    getTitleAndAuthor:function(){
        return `${this.title} : ${this.author}`
    },
    // task 4
    updateYear : function(){
        this.year = "2000"
        console.log(this);
    }
}
console.log(book.getTitleAndAuthor());
book.updateYear()
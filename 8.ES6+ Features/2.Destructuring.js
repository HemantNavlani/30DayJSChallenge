// task 3
const arr = [1,2,3,4,5]

const [first,second] = arr;
console.log("Destructing first element "+first+" and second element "+second);

// task 4
const book = {
    title:"Ego is the enemy",
    author : "Ryan Holiday",
}

const {title,author} = book;
console.log(`${title} : ${author}`);
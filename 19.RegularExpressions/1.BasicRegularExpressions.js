// task 1
const regex = /Javascript/g;

const str = "Hello I am a Javascript developer, I code in Javascript and Javascript is love";
const matches = str.match(regex)
console.log(matches);


// task 2
const regex1 = /\d/g
const str1 = "There are 211 apples and 422 oranges and 133 mango";
console.log(str1.match(regex1));
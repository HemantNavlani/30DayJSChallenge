// task 5
const arr = [1,2,3,4,5];

const newArr = [...arr,6,7,8];

console.log(newArr);

// task 6
function sum(...numbers){
    return numbers.reduce((acc,cur)=>acc+cur)
}
console.log(sum(1,2,4));
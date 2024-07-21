let arr = [5,4,3,2,1]
console.log(arr);

// task 7
let arr2 = arr.map(el=>el*2)
console.log(arr2);

// task 8 
arr2 = arr.filter(el=>el%2==0);
console.log(arr2);

// task 9
let sum = arr.reduce((acc,cur)=>acc+cur,0);
console.log(sum);
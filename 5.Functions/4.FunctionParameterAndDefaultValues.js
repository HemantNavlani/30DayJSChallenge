// task 7 
function product(num1,num2=5){
    return num1*num2;
}
console.log(product(3));
console.log(product(3,8));

// task 8
function greet(name,age='21'){
    return `Hello ! Dear ${name}, your age is ${age}`
}
console.log(greet("Hemant"));
console.log(greet("Hemant",43));
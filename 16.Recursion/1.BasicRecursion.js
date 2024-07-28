// task 1
function factorial(num){
    if (num==0 || num==1) return 1;
    return num*factorial(num-1)
}
console.log(5);
console.log(6);


// task 2
function fibonacci (num){
    if (num==1 || num==2) return 1;
    return fibonacci(num-1)+fibonacci(num-2)
}
console.log(fibonacci(5));
console.log(fibonacci(8));
// task 7
function memoize(fn){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args)
        if (cache[key]) return cache[key];
        else {
            const result = fn(...args)
            cache[key] = result;
            return result;
        }
    }
} 

function slowFunction (num){
    let result= 0;
    for (let i = 0;i<=num;i++)result+=i;
    return result;
}

const memoizedFunc = memoize(slowFunction)
console.log(memoizedFunc(1000));
console.log(memoizedFunc(1000));
console.log(memoizedFunc(2000));
console.log(memoizedFunc(2000));


// task 8

const factorial= (num)=>{
    if (num==0 || num==1) return 1
    return num * factorial(num-1);
}

const memoizedFactorial = memoize(factorial)
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(10));
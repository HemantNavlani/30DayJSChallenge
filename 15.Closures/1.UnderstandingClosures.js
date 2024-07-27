// task 1
function outer (){
    let a = 20;
    function inner(){
        console.log("I am using outer function's variable",a);
    }
    return inner;
}

const inner = outer();
inner();

// task 2
function createCounter (){
    let count = 0;
    
    return {
        increment : ()=>{
            count++
        },
        getCount : ()=>{
            return count
        }
    }
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount());
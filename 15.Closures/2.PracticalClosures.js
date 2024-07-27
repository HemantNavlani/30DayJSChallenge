// task 3
function generateUniqueId (){
    let id = 0;
    return function(){
        id++;
        return id;
    }
}
const uniqueId = generateUniqueId();
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());

// task 4
function createGreetingFunction(username){
    return function (){
        console.log(`Hello ${username}`);
    }
}

const greetJohn = createGreetingFunction("John")
greetJohn();

const greetHemant = createGreetingFunction("Hemant")
greetHemant()
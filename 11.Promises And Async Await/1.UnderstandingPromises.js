// task 1
const myPromise = new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Hello Ji Ram Ram ")
    })
},2000)

myPromise.then((message)=>{
    console.log(message);
})

// task 2
const myPromise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("I am rejected")
    })
},2000)

myPromise2.then((message)=>{
    console.log("Executed");
    console.log(message);
}).catch((message)=>{
    console.log("Error");
    console.log(message);
})
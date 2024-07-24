// task 6
const randomPromise = new Promise((res,rej)=>{
    const num = Math.random();
    if (num<0.5){
        res("Promise resolved")
    }
    else{
        rej("Promise rejected")
    }
})

randomPromise
.then((message)=>{
    console.log(message);
})
.catch(err=>{
    console.log(err);
})

// task 7 


async function handleRandomPromise(){
    try {
        const result = await randomPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
handleRandomPromise()
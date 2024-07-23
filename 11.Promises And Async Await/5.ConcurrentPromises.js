// task 8
const promise1 = new Promise((res)=>{
    setTimeout(()=>{
        res("Promise 1 resolved")
    },2000)
})

const promise2 = new Promise((res)=>{
    setTimeout(()=>{
        res("Promise 2 resolved")
    },500)
})

const promise3 = new Promise((res)=>{
    setTimeout(()=>{
        res("Promise 3 resolved")
    },1500)
})

Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch(err=>{
    console.log(err);
})

// task 9
Promise.race([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch(err=>{
    console.log(err);
})




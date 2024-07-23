// task 3
const fetch1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Fetching Data 1")
    },1000)
})

const fetch2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Fetching Data 2")
    },2000)
})
const fetch3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Fetching Data 3")
    },1500)
})

fetch1.then((data1)=>{
    console.log(data1);
    return fetch2;
})
.then((data2)=>{
    console.log(data2);
    return fetch3
})
.then((data3)=>{
    console.log(data3);
})
.catch((err)=>{
    console.log("Error",err);
})

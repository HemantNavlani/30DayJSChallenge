// task 4
// async function logResolvedValue(){
//     const myPromise = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("This message is resolved")
//         },2000)
//     })
//     try {
//         const resolvedValue = await myPromise
//         console.log(resolvedValue);
//     } catch (error) {
//         console.log(error);
//     }
// }
// logResolvedValue()


// task 5
async function logResolvedValue(){
    const myPromise = new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("This message is rejected")
        },2000)
    })
    try {
        const resolvedValue = await myPromise
        console.log(resolvedValue);
    } catch (error) {
        console.log("Error");
        console.log(error);
    }
}
logResolvedValue();

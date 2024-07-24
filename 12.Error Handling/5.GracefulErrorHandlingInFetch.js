// task 8
const api = "https://api.github.com/users/HemantNavlani"

fetch(api+"q")
.then(response=>{
    if (!response.ok) throw new Error("Response was not ok");
    return response.json();
})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err.message);
})

// task 9
async function handleResponseOfFetch (){
    try {
        const response = await fetch(api+"q")
        if (!response.ok) throw new Error("Response not ok");
        console.log(await response.json());
    } catch (error) {
        console.log(error.message);
    }
}
handleResponseOfFetch();
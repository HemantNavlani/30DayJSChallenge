// task 6
const api = "https://api.github.com/users/HemantNavlani"

fetch(api)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))

// task 7
async function getData (){
    try {
        const data = await fetch(api);
        console.log(await data.json());
    } catch (error) {
        console.log(error);
    }
}

getData()
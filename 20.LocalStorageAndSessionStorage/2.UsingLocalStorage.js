// task 3
const form = document.querySelector("#form")

document.addEventListener('DOMContentLoaded',()=>{
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    if (name)document.querySelector("#savedName").textContent = name;
    if (email)  document.querySelector("#savedEmail").textContent = email;
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    localStorage.setItem('name',name)
    localStorage.setItem('email',email)

    document.querySelector("#savedName").textContent = name;
    document.querySelector("#savedEmail").textContent = email;
})


// task 4
console.log(localStorage);
localStorage.removeItem('userName')
console.log(localStorage);

// task 3
const form = document.querySelector("#form")

document.addEventListener('DOMContentLoaded',()=>{
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    if (name)document.querySelector("#savedName").textContent = name;
    if (email)  document.querySelector("#savedEmail").textContent = email;
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    sessionStorage.setItem('name',name)
    sessionStorage.setItem('email',email)

    document.querySelector("#savedName").textContent = name;
    document.querySelector("#savedEmail").textContent = email;
})


// task 4
console.log(sessionStorage);
sessionStorage.removeItem('name')
console.log(sessionStorage);

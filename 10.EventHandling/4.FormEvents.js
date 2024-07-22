// task 7
const form = document.querySelector("#form")

form.onsubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
}

// task 8 
const select = document.querySelector("#dept")

select.onchange=(e)=>{
    const para = document.createElement("p")
    para.textContent= e.target.value
    document.body.appendChild(para)
}
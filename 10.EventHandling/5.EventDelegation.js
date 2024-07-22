// task 9
const ul = document.querySelector("ul")
ul.onclick = (e)=>{
    if (e.target && e.target.nodeName) console.log(e.target.textContent);
}

// task 10
const button= document.querySelector("#addItem")

button.onclick = ()=>{
    const newLi = document.createElement("li")
    newLi.textContent = `Item ${ul.children.length+1}`
    ul.appendChild(newLi)
}
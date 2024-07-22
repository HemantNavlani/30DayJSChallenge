// task 5
const keydown = document.querySelector("#keydown")

keydown.onkeydown = (e)=>{
    console.log(e);
    console.log(e.key);
}

// task 6
const keyup = document.querySelector("#keyup")

keyup.onkeyup = (e)=>{
    const para = document.createElement("p")
    para.textContent = e.key;
    document.body.appendChild(para)
}

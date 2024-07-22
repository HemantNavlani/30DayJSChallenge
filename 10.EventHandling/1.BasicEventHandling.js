// task 1
const btn = document.querySelector("#btn")
const changeParaText = ()=>{
    const para = document.querySelector("#para")
    para.textContent = "Hi this is me Javascript that helped you changed this paragraph's text content"
}


btn.onclick = changeParaText;
// task 2
const img = document.querySelector("#img")
const changeVisibility=()=>{
    img.style.visibility = "hidden";
}
img.ondblclick = changeVisibility
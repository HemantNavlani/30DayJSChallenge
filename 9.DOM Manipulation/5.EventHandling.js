// task 9
let p = document.getElementById('p')
let btn = document.getElementById('btn')
console.log(p);
console.log(btn);

btn.onclick = func
function func (){
    p.textContent = "Namaste !!"
} 


// task 10
btn.onmouseover = func2;
btn.onmouseout = func3;
function func2 (){
    btn.style.borderColor = 'red'
}
function func3 (){
    btn.style.borderColor = 'black'
}

// task 5
let element = document.querySelector("#greet")
console.log(element);
element.remove()

//task 6
let parent = document.querySelector("#parent")
console.log(parent);
let toRemove = parent.lastElementChild
console.log(toRemove);
toRemove.remove()
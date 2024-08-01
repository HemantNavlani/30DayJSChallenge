// task 1
const str = "hemant_navlani"
localStorage.setItem("userName",str)
console.log(localStorage.getItem("userName"));

// task 2
const obj = {
    name : "Hemant Navlani",
    userName : "hemant_navlani",
    rollNo : "21BCS016"
}
localStorage.setItem("myObject",JSON.stringify(obj))
const data = JSON.parse(localStorage.getItem("myObject"))
console.log(typeof data);
console.log(data);
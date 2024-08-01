// task 5
const str = "HareKrishna"
sessionStorage.setItem('str',str);
console.log(sessionStorage.getItem("str"));


// task 6
const obj = {
    name : "Navlani",
    userName : "Navlani123"
}

sessionStorage.setItem('obj',JSON.stringify(obj))
const data = JSON.parse(sessionStorage.getItem("obj"))
console.log(typeof data);
console.log(data);
function store (key,value){
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value)

    console.log("Local",localStorage.getItem(key));
    console.log("Session",sessionStorage.getItem(key));
}
store("key","value");

function clear(){
    localStorage.clear()
    sessionStorage.clear();
    if (localStorage.length==0) console.log("Local Storage is Empty");
    if (sessionStorage.length==0) console.log("Session Storage is Empty");
}
clear()
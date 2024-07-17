//task 5
const sum = (a,b)=>a+b
console.log(sum(1,111));

// task 6
const containsChar = (str,ch)=>{
    for (let i =0;i<str.length;i++){
        if (str[i]===ch) return true;
    }
    return false;
}
console.log(containsChar("hemant",'q'));

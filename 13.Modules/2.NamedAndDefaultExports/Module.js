export const PI = 3.142
export const add = (a,b)=>{
    return a+b
}

export const subtract = (a,b)=>{
    return a-b;
}
export const multiply = (a,b)=>{
    return a*b;
}

export const divide = (a,b)=>{
    if (b==0) throw new Error("Division by zero");
    return a/b;
}
const defaultFunc = ()=>{
    console.log("I am the default function");
}
export default defaultFunc
// task 9
function hof (func,num){
    for (let i = 0;i<num;i++) func("Hemant");
}
function func(name){
    console.log(`Hello !! ${name}`);
}
hof(func,5)


// task 10
function hof2 (f1,f2,val){
    return f2(f1(val));
}
function f1(v){
    return v+5
}
function f2(v){
    return v*2;
}
console.log(hof2(f1,f2,5));
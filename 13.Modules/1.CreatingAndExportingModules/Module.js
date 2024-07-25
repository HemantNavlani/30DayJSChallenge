const add = (a,b)=>{
    return a+b;
}

const Person = {
    name :"Hemant Navlani",
    age:"21",
    greet: function(){
        return `Hello Mr.${this.name}`;
    }
}
module.exports = {add,Person};

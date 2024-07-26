class Person {
    constructor(name,age){
        this.name =  name;
        this.age = age
    }
    greet(){
        return `Hello my name is ${this.name} and my age is ${this.age}`
    }
    updateAge(){
        this.age++;
        console.log(this.age);
        return this.age
    }
}

// const person1 = new Person("Hemant",21)
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.greet());
// person1.updateAge()

module.exports = {Person}
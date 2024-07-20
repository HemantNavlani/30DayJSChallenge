// task 8
const person = {
    firstName : "Hemant",
    lastName : "Navlani",
    age :21,
    rollNo : 16,
    getFullName : function(){
        return this.firstName+this.lastName
    },
    getRollNo : function(){
        return this.rollNo
    },
    greet: function(){
        return `Hello Mr. ${this.firstName} ${this.lastName}`
    },
    incrementAge(){
        this.age+=1;
        return `New age is ${this.age}`
    }
}
console.log(person);


console.log(person.getFullName())
console.log(person.getRollNo());
console.log(person.greet())
console.log(person.incrementAge())

// task 9 
const prop1Name = "firstName";
const prop2Name = "lastName";
const person1= {
    [prop1Name] : "Hemant",
    [prop2Name] : "Navlani",
    greet:function(){
        console.log(`Hello !! Mr. ${this[prop1Name]} ${this[prop2Name]}`);
    }
}
console.log(person1);
person1.greet()
const {Person} = require('../14.Classes/1.ClassDefinition.js')

class Student extends Person{
    constructor(name,age,studentId){
        super(name,age)
        this.studentId=studentId
    }
    getStudentId(){
        return this.studentId
    }
    greet(){
        return `Hello my name is ${this.name} and my age is ${this.age} and my student id is ${this.studentId}`
    }
}

const st1 = new Student("Hemant",21,111);
console.log(st1.getStudentId());
console.log(st1.greet());
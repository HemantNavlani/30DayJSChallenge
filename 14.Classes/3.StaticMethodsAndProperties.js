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
    static genericGreet(){
        console.log(`Hello from person class`);
    }
}

Person.genericGreet()

class Student extends Person{
    static numOfStudents = 0;
    constructor(name,age,studentId){
        super(name,age)
        this.studentId=studentId
        Student.numOfStudents++;
    }
    getStudentId(){
        return this.studentId
    }
    greet(){
        return `Hello my name is ${this.name} and my age is ${this.age} and my student id is ${this.studentId}`
    }
    static totalStudents(){
        return Student.numOfStudents
    }
}

const s1 = new Student("a",1,"1");
const s2 = new Student("b",2,"2");
const s3 = new Student("c",3,"3");
const s4 = new Student("d",4,"4");
const s5 = new Student("e",5,"5");
console.log(Student.totalStudents());
console.log(Student.numOfStudents);


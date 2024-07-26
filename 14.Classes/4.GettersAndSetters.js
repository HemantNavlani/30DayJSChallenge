class Person {
    constructor(name,age,firstName,lastName){
        this.name =  name;
        this.firstName = firstName
        this.lastName = lastName
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
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setFullName(NAME){
        const[firstName,lastName] = NAME.split(' ')
        this.firstName = firstName
        this.lastName = lastName;
    }
}


const p1 = new Person("hemant",21,"Hemant","Navlani");
console.log(p1.getFullName());
p1.setFullName("Navlani Hemant")
console.log(p1.getFullName());
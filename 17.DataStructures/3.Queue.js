// task 5
class Queue{
    constructor (){
        this.arr = []
    }
    enqueue(value){
        this.arr.push(value);
    }
    dequeue(){
        if (this.arr.length==0) return "Queue is Empty";
        return this.arr.shift();
    }
    front(){
        if (this.arr.length==0) return "Queue is Empty";
        return this.arr[0];
    }
    isEmpty(){
        return this.arr.length==0
    }
}
const q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
console.log(q.dequeue());
console.log(q.front());


// task 6
const printer = new Queue();
printer.enqueue("Job 1")
printer.enqueue("Job 2")
printer.enqueue("Job 3")
printer.enqueue("Job 4")
while (!printer.isEmpty()){
    console.log(printer.dequeue());
}
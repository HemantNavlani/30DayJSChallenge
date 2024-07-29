// task 3
class Stack{
    constructor(){
        this.arr = []
    }
    push(value){
        this.arr.push(value)
    }
    pop(){
        if (this.arr.length==0) {
            return "Stack is empty";
        }
        return this.arr.pop()
    }
    peek(){
        if (this.arr.length==0){
            return"Stack is empty";
        }
        return this.arr[this.arr.length-1];
    }
}

const st = new Stack();
st.push(1)
st.push(2)
st.push(3)
console.log(st.peek());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());


// task 4
const st1 = new Stack();

const str = "Hemant"
for (let i = 0;i<str.length;i++) st1.push(str[i]);

let ans = ""
for (let i = 0;i<str.length;i++) {
    ans= ans + st1.pop()
}
console.log(ans);

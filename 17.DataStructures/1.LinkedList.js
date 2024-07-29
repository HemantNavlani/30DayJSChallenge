// task 1
class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

const firstNode = new Node(1)
const secondNode = new Node(1)
firstNode.next = secondNode

console.log(firstNode);
console.log(secondNode);

// task 2
class LinkedList{
    constructor(){
        this.head=null
    }
    addNode(value){
        const newNode = new Node(value);
        if (this.head==null) this.head = newNode;
        else {
            let temp = this.head;
            while (temp.next!=null) temp = temp.next;
            temp.next = newNode;
        }
    }
    removeNode(){
        if (this.head==null){
            console.log("List is already empty");
            return;
        }
        if (this.head.next==null) this.head = null;
        else {
            let temp = this.head;
            let prev = null;
            while (temp.next!=null){
                prev = temp;
                temp=temp.next;
            }
            prev.next = null;
        }
    }
    diplayNodes(){
        if (this.head==null) {
            console.log("List is empty");
            return
        }
        let temp = this.head
        let nodes = "";
        while (temp!=null){
            nodes+=temp.value+" -> "
            temp = temp.next
        }
        nodes+="null"
        console.log(nodes);
    }
}

const list = new LinkedList();
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.diplayNodes()
list.removeNode()
list.removeNode()
list.removeNode()
list.diplayNodes()
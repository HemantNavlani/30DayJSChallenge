// task 7
class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const newNode = new TreeNode(1);
const newNode1 = new TreeNode(2);
newNode.left = newNode1
console.log(newNode);
console.log(newNode1);

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new TreeNode(value);
        if (this.root==null) this.root=newNode;
        else this.insertNode(this.root,newNode)
    }
    insertNode(node,newNode){
        if (newNode.value<node.value){
            if (node.left==null) node.left=newNode;
            else this.insertNode(node.left,newNode);
        }
        else {
            if (node.right==null) node.right = newNode;
            else this.insertNode(node.right,newNode)
        }
    }
    inorderTraversal(){
        this.inorder(this.root);
    }
    inorder(node){
        if (node==null) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right)
    }
}

const tree = new BinaryTree()

tree.insert(10)
tree.insert(1)
tree.insert(12)
tree.insert(43)
tree.insert(11)
tree.insert(13)
tree.insert(14)
tree.insert(16)
tree.insert(19)

tree.inorderTraversal()
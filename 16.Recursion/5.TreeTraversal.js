// task 9
class TreeNode{
    constructor(value,left,right){
        this.value = value;
        this.left = left;
        this.right = right
    }
}
let root = new TreeNode(1);
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

function inorder(root){
    if (root==null) return
    inorder(root.left)
    console.log(root.value);
    inorder(root.right)
}
inorder(root)

// task 10
function depth(root){
    if (root==null) return 0;
    return 1+Math.max(depth(root.left),depth(root.right))
}
console.log(`Depth : ${depth(root)}`);
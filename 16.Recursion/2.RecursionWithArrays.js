let arr = [1,2,3,4,5,6]
let arr2 = [2,3,1,232,3,45,3453,532,23]
function arrSum(arr,idx){
    if (idx==0) return arr[0]
    return arr[idx]+arrSum(arr,idx-1);
}
console.log(arrSum(arr,arr.length-1));
console.log(arrSum(arr2,arr2.length-1));

function maximum(arr,idx){
    if (idx==0) return arr[0]
    return Math.max(arr[idx],maximum(arr,idx-1))
}
console.log(maximum(arr,arr.length-1));
console.log(maximum(arr2,arr2.length-1));
// task 7
let arr = [1,2,3,4,5,6]
function binarySearch(arr,st,end,target){
    if (st>end) return -1;
    let mid = Math.floor((st+end)/2);
    if (arr[mid]==target) return mid;
    else if (arr[mid]>target) return binarySearch(arr,st,mid-1,target);
    else return binarySearch(arr,mid+1,end,target)
}

console.log(binarySearch(arr,0,arr.length-1,4))
console.log(binarySearch(arr,0,arr.length-1,6))
console.log(binarySearch(arr,0,arr.length-1,0))

// task 8 
function countOccurences(arr,target,idx){
    if (idx==arr.length) return 0;
    if (arr[idx]==target) return 1+countOccurences(arr,target,idx+1);
    return countOccurences(arr,target,idx+1)
}
let arr1 = [1,2,3,4,4,1,2,3,232,32,3,11,4,4,3,3,3,544,3,3,3,3,3,3]
console.log(countOccurences(arr1,3,0))
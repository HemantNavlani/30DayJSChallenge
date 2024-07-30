let arr = [1,2,3,3,32,34,43]

function linearSearch(arr,target){
    for (let i = 0;i<arr.length;i++){
        if (arr[i]==target) return i;
    }
    return -1;
}
console.log(linearSearch(arr,34));

// let arr = [1,2,3,3,32,34,43]
function binarySearch(arr,target){
    let st = 0;
    let end = arr.length-1;
    while (st<=end){
        let mid = st+(end-st)/2;
        if (arr[mid]===target) return mid;
        else if (arr[mid]<target) st = mid+1;
        else end = mid-1;
    }
    return -1;
}
console.log(binarySearch(arr,34));
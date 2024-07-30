let arr = [1,2,3,4,5]
function rotateArrayByK(arr,k){
    while (k>0){
        arr.unshift(arr.pop());
        k--
    }
}
rotateArrayByK(arr,3)
console.log(arr);

let arr1 = [1,2,4,5,7,9]
let arr2 = [3,4,5,6,8]
function mergeTwoSortedArrays(arr1,arr2){
    let arr = [];
    let i = 0;
    let j = 0;
    while (i<arr1.length && j<arr2.length){
        if (arr1[i]<=arr2[j]) {
            arr.push(arr1[i]);
            i++;
        }
        else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while (i<arr1.length) {
        arr.push(arr1[i]);
        i++
    }
    while(j<arr2.length){
        arr.push(arr2[j]);
        j++;
    }
    return arr
}
console.log(mergeTwoSortedArrays(arr1,arr2));
let arr = [3,2,1,2,34,43,3,32,3]

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// task 1
function bubbleSort(arr){
    for (let i = 0;i<arr.length;i++){
        let flag = false;
        for (let j=0;j<arr.length-i;j++){
            if (arr[j]>arr[j+1]){
                flag = true;
                swap(arr,j,j+1);
            }
        }
        if (!flag) return;
    }
}
// bubbleSort(arr)
// console.log(arr);

// task 2
function selectionSort(arr){
    for (let i = 0;i<arr.length;i++){
        let min = i;
        for (let j = i+1;j<arr.length;j++){
            if (arr[j]<arr[min]) min = j;
        }
        swap(arr,i,min);
    }
}
// selectionSort(arr)
// console.log(arr);

// task 3
function quickSort(arr,st,end){
    if (st>=end) return;
    let pi = partition(arr,st,end);
    quickSort(arr,st,pi-1)
    quickSort(arr,pi+1,end);
}

function partition(arr,st,end){
    if (st==end) return st;
    let i = st;
    let j = end;
    let pivot = arr[st];
    while (i<=j && i<arr.length && j>=0){
        while (i<arr.length && arr[i]<=pivot) i++;
        while (j>=0 && arr[j]>pivot) j--;

        if (i<=j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    let temp = arr[j];
    arr[j] = arr[st];
    arr[st] = temp;
    return j;
}
quickSort(arr,0,arr.length-1);
console.log(arr);
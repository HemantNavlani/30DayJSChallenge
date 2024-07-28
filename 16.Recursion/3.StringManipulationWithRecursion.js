// task 5
let str = "Hello"
function reverse(str,left,right){
    if (left>right) return str;
    let arr = str.split('');
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
    str = arr.join('')
    return reverse(str,left+1,right-1)
}

console.log(reverse(str,0,str.length-1));
console.log(reverse("Hemant",0,5));
console.log(reverse("Navlani",0,6));


// task 6
function isPalindrome(str,left,right){
    if (left>right) return true;
    if (str[left]!=str[right]) return false;
    return isPalindrome(str,left+1,right-1);
}
let str1 = "anana"
// let str1 = "nana"
// let str1 = "apple"

console.log(isPalindrome(str1,0,str1.length-1));

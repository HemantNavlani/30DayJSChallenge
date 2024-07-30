let obj = {};
let str = "HemantHemant"
for (let i =0;i<str.length;i++){
    if (obj[str.charAt(i)]) obj[str.charAt(i)]+=1;
    else obj[str.charAt(i)] = 1;
}
console.log(obj);



let string = "abcabcbb"
function longestSubstringWithUniqueLetter(str){
    let n = str.length;
    let maxLen = 0;
    let charMap = new Map();
    let st = 0;
    for (let end = 0;end<n;end++){
        let char = str[end];
        if (charMap.has(char)){
            st =Math.max(st,charMap.get(char)+1)
        }
        charMap.set(char, end);

        maxLen = Math.max(maxLen,end-st+1)
    }
    return maxLen
}
console.log(longestSubstringWithUniqueLetter(string))

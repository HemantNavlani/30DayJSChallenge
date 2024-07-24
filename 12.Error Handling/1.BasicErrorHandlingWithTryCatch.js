// task 1
function error (){
    try {
        throw new Error("Intentional Error")
    } catch (error) {
        console.log(error.message);
    }
}
error()

// task 2
function divide(num1,num2){
    try {
        if (num2==0) {
            throw new Error("Denominator cannot be zero");
        }
        return num1/num2;
    } catch (error) {
        console.log(error.message);
    }
}
console.log(divide(5,0));
    
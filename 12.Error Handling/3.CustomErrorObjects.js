// task 4
class CustomError extends Error{
    constructor(message){
        super(message)
        this.name="Custom Error"
    }
}
function riskyFunction(){
    throw new CustomError("Something went wrong in riskyFunction")
}
try {
    riskyFunction()
} catch (error) {
    if (error instanceof CustomError){
        console.error(`Custom Error caught : ${error.message}`);
    }
    else console.error(`Unexpected Error Caught : ${error.message}`)
}

// task 5
const validateInput = (input)=>{
    if (typeof input !== "string" || input.trim()=='') throw new CustomError("Input must be non-empty string");
    return true
}

try {
    const input = ""
    validateInput(input)
    console.log("Input is valid");
} catch (error) {
    if (error instanceof CustomError)  console.log(`Custom error : ${error.message}`);
    else console.log(`Unexpected Error : ${error}`);
}
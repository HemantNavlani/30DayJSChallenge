// task 5
function createFunctionArray(){
    const functions = []
    for (let i =0;i<10;i++){
        functions.push((function(idx){
            return function(){
                console.log(idx);
            }
        })(i))
    }
    return functions;
}

const functionArray  = createFunctionArray()
functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
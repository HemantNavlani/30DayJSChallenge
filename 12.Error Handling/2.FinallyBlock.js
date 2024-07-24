// task 3
try {
    console.log("Hello");
    throw new Error();
} catch (error) {
    console.log("Error");
}finally{
    console.log("Finally");
}
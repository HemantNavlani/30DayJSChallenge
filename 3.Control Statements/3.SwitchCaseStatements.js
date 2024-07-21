// task 4
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7 : 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day entered");
        break;
}

// task 5
let score = 100
switch(true){
    case (score>=0 && score<33):
        console.log("F");
        break;
    case (score>=33 && score<50):
        console.log("D");
        break;
    case (score>=50 && score<70):
        console.log("C");
        break;
    case (score>=70 && score<90):
        console.log("B");
        break;
    case (score>=90 && score <=100):
        console.log("A");
        break;
    default:
        console.log("Invalid Marks");
        break;
}
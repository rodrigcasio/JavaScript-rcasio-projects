// Exercise: Practice conditional statements

// 1. Are you old enough?
var age = 25;

if(age >= 65){
    console.log("You get your income from your pension");
}else if(age < 65 &&  age >= 18){
    console.log("Each month you get a salary");
}else if(age < 18){
    console.log("You get an allowance");
}else{
    console.log("The value of the age variable is not numerical");
}

// 2. Days of the week (switch statement)
var day = "Saturday";

switch(day){
    case "Monday":
        console.log("Go to uni");
        break;
    case "Tuesday":
        console.log("Go to uni");
        break;
    case "Wednseday":
        console.log("Go to uni");
        break;
    case "Thursday":
        console.log("Go to uni");
        break;
    case "Friday":
        console.log("Go to uni");
        break;
    case "Saturday":
        console.log("code all day");
        break;
    case "Sunday":
        console.log("Code all day");
        break;
    default:
        console.log("There is no such day");
}

// Exercise : Advanced use of operators

// Task 1: Using logical  && operator
var score = 8;
console.log("Mid level skill", score > 0 && score < 10);  

console.log("----");

// Task 2 Using logical || operator
var timeRemaining =  0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

console.log("----");

// Task 3 Using modulus operator , %, to test  if given number is odd.
var num1 = 2;
var num2 = 5;

var test1 = num1 % 2;   // 0
var test2 = num2 % 2;   // 1

var result1 = test1 == 0;   // true
var result2 = test2 == 0; // false

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

console.log("----");

// Task 4 Add number using the + operator 
console.log(5 + 10);

console.log("----");

// Task 5 Concatenate numbers  and strings using the + operator 
var now = "Now in ";
var three = 3;
var d = "D!";

console.log(now + three + d);   // Now in 3D!

console.log("----");

// Task 6 Use the += operator to accumulate values in a variable
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);


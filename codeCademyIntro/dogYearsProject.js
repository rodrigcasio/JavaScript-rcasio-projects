// === project called Dog Years = JS variable practice 

// My curent years
const myAge = 25;

// fist two years as a dog (they have different value of human years)
let earlyYears = 2;

// using the multiplication assignment operator
earlyYears *= 10.5;

// the years after encountering the first two human years 
let laterYears = myAge - 2;

// after the first 2 years, each year will be 4 dog years
laterYears *= 4;

console.log(`${earlyYears}, ${laterYears}.`);   // checking the value

// storing dog years value
const myAgeInDogYears = earlyYears + laterYears;

// storing my name into myName and using the .toLowerCase() method to the string of my name
const myName = 'Rodrigo'.toLowerCase();

// displaying results using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);



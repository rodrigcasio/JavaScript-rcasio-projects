// Example of accesing built-in objects like 'Math' and 'Number'

// Using the object 'Math'
// Example of getting a random number with the method .random()

console.log(Math.random()); // outputs  a random number between 0 and 1 (decimal)
console.log(Math.random() * 100);   // outputs a random number from 0 to 100 (decimal)
console.log(Math.floor(Math.random() * 100)); // outputs a random whole number with using .floor() method to round down  a random number

// Using the object 'Math' again
// Example of returning the smallest integer greater than or equal to a given number with method .ceil()

console.log(Math.ceil(43.3));   // outputs 44
console.log(Math.ceil(59)); // outputs 59 
console.log(Math.ceil(59.3));   // outputs 60

// Using the object 'Number'
// Example of checking if the a number is an integer with the method .isInteger()
// and return true or false, as if isInteger is a question 

console.log(Number.isInteger(2025));    // outputs true
console.log(Number.isInteger(392.3));    // outputs false
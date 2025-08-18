// Example of using short-circuit evaluation

let username = ''; // falsy variable
let defaultName;

if(username){
    defaultName = username;
}else{
    defaultName = 'Stranger';
}

console.log("=== 1. Example ===");
console.log(defaultName);    // prints 'Stranger since username is valued as a falsy variable

// example of using logical operator ||
console.log("=== 2. Example without if-else condition, and using logical operator || ===");
console.log('Using the short-circuit evalutation here:');
username = '';
defaultName = username || 'Stranger2';  // short-circuit evaluation
console.log(defaultName);   // outputs 'Stranger2'

console.log("=== 3. Example ===")
let tool = ''; // falsy variable
let writingUtensil = tool || 'pen';
console.log(`The ${writingUtensil} is mightier than the sword.`);   // outputs : 'The pen us mightier than the sword.


// Some other arrays methods that are available to JS developers are
// .join(), slice(), splice(), shift(), unshift() and concat().

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// 1. removing the first item of the array 'groceryList' and log it into the console
groceryList.shift();
console.log(`1. The result of using the .shift() method: ${groceryList}`);

console.log(`---`);

// 2. adding the 'popcorn' as the first element of the array with .unshift().
groceryList.unshift('popcorn');
console.log(`2. Using .unshift(), result: ${groceryList}`);

console.log(`---`);

// 3. using slice to provide a copy of specific elements from the array. from 1(bananas) to 4 which will print the 3 indexed item
console.log(`3. Using .slice(1, 4) method, result: ${groceryList.slice(1, 4)}`);

console.log(`---`);

// 4. confirming .slice() method is non-mutating
console.log(groceryList);

console.log(`---`);

// 5. finding the index of a  particular element from the "groceryList" array   // finding the index of 'pasta'
const pastaIndex = groceryList.indexOf('pasta');    
console.log(`Using .indexOf('pasta') result: ${pastaIndex}`);

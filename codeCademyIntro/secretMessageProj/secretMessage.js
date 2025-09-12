// Small project to practice Arrays in JavaScript

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(`First length value of "secreteMessage": ${secretMessage.length}`);

console.log(`---`)
                            // 1. Removing last string of the array "secretMessage"
secretMessage.pop();     
console.log(`Current length of "secretMessage" array: ${secretMessage.length}`);     // output : 23

console.log(`---`);
                            // 2. Adding 'to' and 'Program' strings to the end of the array
secretMessage.push(`to`, `Program`);
console.log(secretMessage);

console.log(`---`);
                            // 3. changing the string 'easily' to 'right' 
const stringIndex = secretMessage.indexOf(`easily`);
secretMessage[stringIndex] = 'right';
console.log(`${secretMessage}`);     // changed from 'easily' to 'right'

console.log(`---`);
                            // 4. removing the first string of the array
secretMessage.shift();
console.log(`${secretMessage}`);

console.log(`---`);
                            // 5. adding the word 'Programming' to the beginning of the array
secretMessage.unshift(`Programming`);
console.log(`${secretMessage}`);

console.log(`---`);
                            // 6. using splice() to remove the string 'get', 'right', 'the', 'first', 'time'. and replace them with 'know'
secretMessage.splice(6, 5, 'know,');
console.log(`${secretMessage}`);

console.log(`${secretMessage}`);
                            // 7. Printing the "secretMessage" array, as a sentence using .join().
console.log(secretMessage.join(' '));   // output: Programming is not about what you know, it is about what you can figure out. -2012, Chris Pine, Learn to Program

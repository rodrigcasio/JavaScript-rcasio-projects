// Example of using ternary operator in JavaScript

let isLocked = false;
/*
    if(isLocked){
        console.log('You will need a key to open the door.');
    }else{
        console.log('You will not need a key to open the door.');
    }
*/
console.log('=== 1 example result ===')  // output : You will not need a key to open the door.
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

console.log('=== 2. example result ===')    // output: Correct!
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

console.log('=== 3. example result ===')    // output: I love that!
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that");
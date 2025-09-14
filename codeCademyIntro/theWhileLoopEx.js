// This is an example of a while loop in JavaScript

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;
let count = 0;

while(currentCard !== 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    count++;
    console.log(`${count}. ${currentCard}`);
}

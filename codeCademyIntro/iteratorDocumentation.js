// Practice using MDN's Array iteration methods page to correct these errors:


const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// 1.
console.log(words.some(word => {          // output: true if there are words that meet the condition 
  return word.length < 6;
}));

console.log(`---`);

// 2. Use filter to create a new array
const interestingWords = words.filter(word => {
    return word.length > 5;
})

console.log(interestingWords);

console.log(`---`);

// 3.    checking if every word in "interestingWords" has more than 5 characters 
console.log(interestingWords.every(word => {           // output: true
    return word.length > 5;
}))


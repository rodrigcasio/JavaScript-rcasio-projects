// Small project to practice using iterators

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;      // 2
storyWords.forEach(word => {  // 3
    return count++;
});

console.log(`count value: ${count}`);       // 4.

/*
storyWords = storyWords.filter(word => {        // 6. remove the word 'literally' from the story
    if(word !== unnecessaryWord){
        return word;
    }
});
*/

// fixed with using TO 
storyWords = storyWords.filter(word => word !== unnecessaryWord);   // 6. 

// --------
/*
storyWords = storyWords.map(word => {           // 7.  modify the misspelled word
    if(word === misspelledWord){
        return 'beautiful';
    }else {
        return word;
    }
})
*/

// fixed with using TO oneline
storyWords = storyWords.map(word => word === misspelledWord ? 'beautiful' : word);      // 7.

// --------
/*
const badWordIndex = storyWords.findIndex(wordIndex => {        // 8.
    if(wordIndex === badWord){
        return wordIndex;
    }
});
*/

// fixed with using TO oneline 
const badWordIndex = storyWords.findIndex(word => word === badWord);

// --------
console.log(`the badWord index is: ${badWordIndex}`);   //  // 8. finding out the index of the bad word

storyWords[78] = 'really';  // 9. changing the bad word with the index

const lengthCheck = storyWords.every(word => {      // 10. making sure each word of the story is 10 characters or less
    return word <= 10;
});

console.log(lengthCheck);       // output: false


//---------------

// finding the actual string
const wordChange = storyWords.filter(word => {
    if(word.length > 10){
        return word;
    }
});

// findin the index of this word
const indexOfWordChange = storyWords.findIndex(word => {
    if(word.length > 10){
        return word;
    }
});

console.log(`the word with more than 10 characters: ${wordChange}`);
console.log(`the index of the word with more than 10 characters ${indexOfWordChange}`);

storyWords[111] = 'glorious';           // changing word manually with its index

console.log(storyWords.join(' '));  // 1



/*
    if we know that there is only one word that needs to be change we can change it 
    with map(): 

storyWords = storyWords.map(word => {
    if(word.length > 10){
        return 'glorious';
    }else {
        return word;
    }
})

*/

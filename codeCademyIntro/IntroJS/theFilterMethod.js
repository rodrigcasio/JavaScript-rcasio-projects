// Example of using the iterator ".filter()"

// 1.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {       // if number is less than 250
    return number < 250;                                    // it will be placed in the array "smallNumber"
});

// result:
console.log(smallNumbers);

console.log(`---`);

// 2.
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
     return word.length > 7;
});

// result:
console.log(longFavoriteWords);

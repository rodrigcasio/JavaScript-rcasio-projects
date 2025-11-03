// Example of creating a Magic Eight-Ball
// using control flow and setting the responses inside a function


let userName = 'Rodrigo';   // 1.
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);  // 2. checks if the userName variable is falsy 
let userQuestion = 'Will i finish this JavaScript course by the end of this year?';  // 3.
console.log(`${userName}:\"${userQuestion}\".`);  // 4.
let randomNumber = Math.floor(Math.random() * 8);   // 5. generating random number
let eightBall = ''; // 6. initilizing the value where the answers will be saved

// saving it into a function the responses asking for a number as a parameter
function getEightBallResponse(number){
    switch(number){
        case 0: return 'It is certain'; break; // return it as a string
        case 1: return 'It is decidedly so'; break;
        case 2: return 'Reply hazy try again'; break;
        case 3: return 'Cannot predict now'; break;
        case 4: return 'Do not count on it'; break;
        case 5: return 'My sources say no'; break;
        case 6: return 'Outlook not so good'; break;
        case 7: return 'Signs point to yes'; break;
        default: return 'Unknown input number'; break;
    }
}

eightBall = getEightBallResponse(randomNumber);  // 7. assigning the returned string to the eightBall variable (response)
console.log(eightBall);    //  8. output : eightBall response
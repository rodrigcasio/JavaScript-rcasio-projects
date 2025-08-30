// Small project to practice functions in JS
// Rock Paper Scissors game.

const getUserChoice = (userInput) => {        // 1.
    // const input = userInput.toLowerCase();   // 2.
    userInput = userInput.toLowerCase();    // 2.

    switch(userInput){      // 3.
        case 'rock': return userInput; break;
        case 'paper': return userInput; break;
        case 'scissors': return userInput; break;
        case 'bomb': return userInput; break;
        default: return 'Unknown user input'; break;
    }
};
// test
// console.log(getUserChoice('Rock')); // 4.
// console.log(getUserChoice('Sandals'));

const getComputerChoice = () => {   // 5.
    const choice = Math.floor(Math.random() * 4);
    switch(choice){
        case 0: return 'rock'; break;
        case 1: return 'paper'; break;
        case 2: return 'scissors'; break;
        case 3: return 'bomb'; break;
        default: return 'unknown'; break;
    }
}
// 6. test
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){  // 7.
        return "It's a tie!";
    }else if(userChoice === 'bomb'){
        return computerChoice === 'bomb' ? 'Huge explosion takes place! Both players loose' : 'User wins!';   
    }else if(userChoice === 'rock'){  // 8.
        return (computerChoice === 'paper' || computerChoice === 'bomb') ? 'Computer wins!' : 'User wins!';
    }else if(userChoice === 'paper'){   // 9.
        return (computerChoice === 'scissors' || computerChoice === 'bomb') ? 'Computer wins!' : 'User wins!';
    }else{  // 10.
        return (computerChoice === 'rock' || computerChoice === 'bomb') ? 'Computer wins!' : 'User wins!';
    }
}

// test 11.
console.log(`\t--- test ---`);
const user = getUserChoice('rock');
console.log(`User's choice --> ${user}.`);
const computer = getComputerChoice();
console.log(`Computer's choice --> ${computer}.`);
console.log(determineWinner(user, computer));


const playGame = () => {    // 12, 13.
    const userChoice = getUserChoice('paper');  // picking explicitly 
    const computerChoice = getComputerChoice();
    console.log(`\n --- Real Game ---`);
    console.log(`User's choice --> ${userChoice}.`);
    console.log(`Computer's choice --> ${computerChoice}.`);
    // game
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

// This is a small project to demonstrate the use of loops

// my phrase
const input = `I'm currently learning JavaScript to become a great Nodejs developer`;

const vowels = ['a', 'e', 'i', 'o', 'u'];       // whale vowels 

let resultArray = [];

for(let i = 0; i < input.length; i++){
    for(let j = 0; j < vowels.length; j++){
        if(input[i] === vowels[j]){
            resultArray.push(input[i]);
        }
    }
    if(input[i] === 'e'){            // doubling e's and u's
        resultArray.push(input[i]);
    }else if(input[i] === 'u'){
        resultArray.push(input[i]);
    }
}

let resultString = resultArray.join('');       // adding each string joined in a variable 

console.log(`My whale talk: ${resultString.toUpperCase()}`);     // output of each string capitalized


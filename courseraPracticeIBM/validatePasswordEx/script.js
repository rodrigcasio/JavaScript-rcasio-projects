// exercise 3
// validate passwords

// regExpression : allow only alphanumeric characters and be between 8 and 20 characters long.

// Example of using an array of Strings
const passwords = ["password1234", "ilikeplayinhockey", "ilovepizza67", "chocolatepool23", "1234568", "aquilesbailo"];

function validatePassword(passwords){
    const regExpression = /^[a-zA-Z0-9]{8,20}$/;       // new : regular expression to define the pattern for valid passwords  
    for(let i = 0; i < passwords.length; i++){
        if(regExpression.test(passwords[i])){    // using the test() method to check if each password matches the regularExpression
            console.log(`\'${passwords[i]}\' is valid.`);
        }else{
            console.log(`\'${passwords[i]}\' is invalid.`);
        }
    }
}

validatePassword(passwords);

console.log('======= Second Example with different type of array ========');


//  Example of using an 'Array of objects'.
const passwords2 = [
    {password: "ilikebasketball8"},
    {password: "chocolateRain77"},
    {password: "papajohns32"},
    {password: "33232323232"},
    {password: "asfoijiojidojaiosjdiojaisjdioajs"},
];

function validatePasswords2(passwords2){
    const regExpression2 = /^[a-zA-Z0-9]{8,20}$/;
    for(let i = 0; i < passwords2.length; i++){
        if(regExpression2.test(passwords2[i].password)){
            console.log(`\'${passwords2[i].password}\' is valid`);
        }else{
            console.log(`\'${passwords2[i].password}\' is invalid`);
        }
    }
}

validatePasswords2(passwords2);

console.log("\t====== Example of accessing keys and values from data structure: hash map");

// Quick example of a 'Hash Map'
const passwordMap = {
    'user1': 'password1234',
    'user2': 'ilikeplayingsoccer'
};

// accessing keys and values using the Object class with Object.entries(): returns  an array of[keys, value] pairs;

Object.entries(passwordMap).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

/*
   In the context of Object.entries(myObject).forEach(([key, value]) => {}), destructuring is the part [key, value].
Here's how it works:

    1. Object.entries(myObject) returns a new array. Each element of this new array is itself another array containing a key-value pair, like [['key1', 'value1'], ['key2', 'value2']].

    2. The forEach method iterates over this new array. For each element it processes (which is an array like ['key1', 'value1']),
    the destructuring assignment [key, value] immediately extracts the first element into a variable called key and the second element into a variable called value. 

*/

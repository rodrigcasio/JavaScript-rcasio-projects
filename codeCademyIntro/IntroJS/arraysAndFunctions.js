// Arrays and Functions
// arrays passed-by-reference


const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);   //checking if the array was mutated  (it was)

console.log(`---`);

// Removing an element from the "concept" array in a function
const removeElement = newArr => {
    newArr.pop();
}

removeElement(concept);
console.log(concept);       // checking if array was mutated 

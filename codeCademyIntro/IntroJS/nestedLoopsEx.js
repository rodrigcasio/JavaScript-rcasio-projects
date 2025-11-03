// Example of nested loops


const bobsFollowers = ['Rod', 'Shawn', 'Lexy', 'Johanna'];
const tinasFollowers = ['Tatiana', 'Lexy', 'Rod'];
const mutualFollowers = [];

// pushings friends that are mutual to bob and tina
for(let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < tinasFollowers.length; j++){
        if(bobsFollowers[i] === tinasFollowers[j]){
            console.log(`${bobsFollowers[i]} is in both Bob and Tina's follower list!`);
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

console.log(mutualFollowers);


console.log(`---`);

// second example
const array1 = [32, 223, 54, 67];
const array2 = [55, 67, 544, 32];
const array3 = [];

for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
        if(array1[i] === array2[j]){
            console.log(`${array1[i]} apears in both arrays!`);
            array3.push(array1[i]);
        }
    }
}

console.log(array3);
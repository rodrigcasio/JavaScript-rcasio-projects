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

console.log(`---`);
console.log(mutualFollowers);

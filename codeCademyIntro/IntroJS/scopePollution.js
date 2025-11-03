// Example of scope pollution
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {   
    stars = 'Sirius';        // change the variable inside the block code
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);     
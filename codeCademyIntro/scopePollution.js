// Example of scope pollution
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callmyNightSky = () => {
    
    return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());

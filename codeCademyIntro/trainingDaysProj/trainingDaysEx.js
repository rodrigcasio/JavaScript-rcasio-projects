// Training Days Project

const getRandEvent = () => {     
    let random = Math.floor(Math.random() * 3);           // getting random number, moved to be a block scope 

    if(random === 0){
        return 'Marathon';
    }else if(random === 1){
        return 'Triathlon';
    }else if(random === 2){
        return 'Pentathlon';
    }
};

const getTrainingDays = event => {
    let days = 0;       // 1.  

    if(event === 'Marathon'){
        days = 50;         // letting days change its value from the if block scope
    }else if(event === 'Triathlon'){
        days = 100;
    }else if(event === 'Pentathlon'){
        days = 200;
    }
    return days;
};


// moved name as a global scope
const name = 'Nala';

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
}

const logTime = (name, days) => {
    console.log(`${name}'s time to train is ${days} days`);
}


const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

console.log(`-----`);
// new competitor

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren'; 

logEvent(name2, event2);
logTime(name2, days2);

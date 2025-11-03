// Example of using fuctions to create a sleep-debt-calculator

const getSleepHours = (day) => {    // 1.
    day = day.toLowerCase();
    switch(day){    // 2.
        case 'monday': return 6; break;
        case 'tuesday': return 6; break;
        case 'wednesday': return 7; break;
        case 'thursday': return 7; break;
        case 'friday': return 5; break;
        case 'saturday': return 6; break
        case 'sunday': return 6; break;
        default: return 'Unknown user input';
    }
}

// 3 test
console.log(getSleepHours('Tuesday'));  // output 6

// 4  (using implicit return)   // extra practice 12.1 :  adding the actual hours without calling the getSleepHours;
const getActualSleepHours = () =>  6 + 6 + 7 + 7 + 5 + 6 + 6;

// 5. // extra practice 12.2 adding one parameter (hours)
const getIdealSleepHours = hours => hours *= 7;

// 7 testing
console.log(`test for getting actual hours of sleep: ${getActualSleepHours()}`);
console.log(`test for getting ideal hours of sleep: ${getIdealSleepHours(8)}`);

// 8.   Calculator

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);  // new, added 1 parameter

    if(actualSleepHours === idealSleepHours){
        console.log(`You're getting perfect amount of sleep!`);
    }else if(actualSleepHours > idealSleepHours){
        console.log(`You're getting more sleep than needed, don't be lazy!.\nYou are sleeping ${actualSleepHours - idealSleepHours} more than needed`);
    }else{
        console.log(`You should get more rest!.\nYou need sleep at least ${idealSleepHours - actualSleepHours} more!`);
    }
}

// 11. calling the calculator
calculateSleepDebt();


// suggestion  instead of using swtich() statement 
/*
   const sleepHours = {
  monday: 6,
  tuesday: 6,
  wednesday: 7,
  thursday: 7,
  friday: 5,
  saturday: 6,
  sunday: 6
};
const getSleepHours = (day) => sleepHours[day.toLowerCase()] || 0; 


*/
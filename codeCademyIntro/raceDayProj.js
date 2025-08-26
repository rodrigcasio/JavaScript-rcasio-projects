// This is a small project for practicing conditionals

let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const runnerAge = 25;

if(registeredEarly && runnerAge > 18){
    raceNumber += 1000;
}

if(registeredEarly && runnerAge > 18){
    console.log(`Your race will start at 9:30 am. Race Number: ${raceNumber}`);
}else if(!registeredEarly && runnerAge > 18){
    console.log(`Your race will start at 11:00 am. Race Number: ${raceNumber}`);
}else if(runnerAge < 18){
    console.log(`Your race will start at 12:30 pm. Race Number: ${raceNumber}`);
}else{
    console.log(`Please, see the registration desk.`);
}


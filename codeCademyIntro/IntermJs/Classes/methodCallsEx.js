// Example of using methods created for the class 'Surgeon'

class Surgeon {
    constructor(name, department){
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get department(){
        return this._department;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        if (typeof daysOff === 'number' && daysOff > 0){
            this._remainingVacationDays -= daysOff;
        } else {
            console.log(`Cannot take days off. Please place a proper input for method`);
        }
    }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// using getters and the method in the exercise

console.log(surgeonRomero.name);        // getters dont need parenthesis ()

surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);


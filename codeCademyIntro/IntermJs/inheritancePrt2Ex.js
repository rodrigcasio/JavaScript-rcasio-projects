// Creating th first subclass which will inherit properties and methods from the parent class

class HospitalEmployee {
    constructor(name, department){
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name(){
        return this._name;
    }

    get remainingVacationDays(){
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff){
        if (typeof daysOff === 'number' && daysOff > 0){
            this._remainingVacationDays -= daysOff;
        }
    }
}


// first subclass

class Nurse extends HospitalEmployee {
    constructor(name, certifications){
        super(name);                                
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

console.log(nurseOlynyk.name);

console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.takeVacationDays(7);
console.log(nurseOlynyk.remainingVacationDays);


// super: super() calls the constructor of the parent class. super(name) passes the 'name' arg of the Nurse class to the constructor of the 'HospitalEmployee' class
//        When 'HospitalEmployee' constructor runs. it "sets" this.name = name; for new Nurse instances!
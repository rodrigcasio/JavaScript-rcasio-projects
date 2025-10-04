// Creating th first subclass which will inherit properties and methods from the parent class
// 2. Setting up the first subclass 'Nurse' with its own property _certifications and a method addCertification(newCertification)

class HospitalEmployee {
    constructor(name){
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


class Nurse extends HospitalEmployee {
    constructor(name, certifications){
        super(name);
        this._certifications = certifications;
    }

    get certifications(){
        return this._certifications;
    }
    
    addCertification(newCertification){                 // new method that pushes into the array of this._certifications
        if (typeof newCertification === 'string'){
            this._certifications.push(newCertification);
        } else {
            console.log(`Could not add new certificate. Please add a a valid certificate name`);
        }
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
// Example of School catalogue


//1
class School {
    constructor(name, level, numOfStudents){
        this._name = name;
        this._level = level;
        this._numOfStudents = numOfStudents;
    }
    
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numOfStudents(){
        return this._numOfStudents;
    }

    set numOfStudents(num){
        if (typeof num === 'number' && num > 0){
            this._numOfStudents = num; 
        }
    }
    
    static quickFacts(){
        
    }
    static pickSubstituteTeacher(){

    }
}

//2
class Primary extends School {
    constructor(name, level, numOfStudents){
        super(name);
        super(level);
        super(numOfStudents);
        this._pickupPolicy = '';
    }
    
}











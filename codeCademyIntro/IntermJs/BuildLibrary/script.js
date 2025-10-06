// Small porject practice for Classes in JS

// Parent class       
class Media {   // 1.
    constructor(title){    // 2. 
        this._title = title;            // 3.
        this._isCheckedOut = false;
        this._rating = [];
    }

    get title(){            // 4.
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get rating(){
        return this._rating;
    }

    set isCheckedOut(status){           // 5.
        if (typeof status === 'boolean'){
            this._isCheckedOut = true;
        } else {
            console.log(`Couldnt change the status, try again please`);
        }
    }

    toggleCheckedOutStatus(){               // 6.
        let status = this._isCheckedOut;
        if(status){
            this._isCheckedOut = false;
        } else if(!status){
            this._isCheckedOut = true;
        }
    }


}

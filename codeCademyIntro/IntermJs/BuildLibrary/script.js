// Small porject practice for Classes in JS

class Catalog {     // 25.5
    static _mediaAvailable = [];

    static get mediaAvailable(){
        return this._mediaAvailable;
    }
    static set addMedia(media){
        this.mediaAvailable.push(media);
    }
}

// Parent class       
class Media extends Catalog {   // 1.
    constructor(title){    // 2. 
        super();
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

    toggleCheckOutStatus(){               // 6.
        let status = this._isCheckedOut;
        if(status){
            this._isCheckedOut = false;
            console.log(`"${this.title}" successfully checked in. (returned)`);
        } else if(!status){
            this._isCheckedOut = true;
            console.log(`"${this.title}" successfully checked out. (borrowed)`);
        }
    }

    getAverageRating(){                     // 7.
        let lengthRatingsA = this.rating.length;
        let averageRating = this.rating.reduce((acc, rating) => {
            return acc + rating;
        }, 0);
        
        return `The average ratings for "${this.title}" is "${averageRating / lengthRatingsA}"`;
    }
    
    addRating(newRating){           // 8.
        if (typeof newRating === 'number' && newRating >= 0 && newRating <= 5){     // 25. 3
            this.rating.push(newRating);
            console.log(`New rating added successfully!. Rated ${newRating} to "${this.title}"`);
        } else {
            console.log(`Could not add rating correctly, try again`);
        }
    }
}

// 1st subclass
class Book extends Media {      // 9.
    constructor(author, title, pages){      // 10.
        super(title);   // 11.
        this._author = author;  // 12.
        this._pages = pages;
        Media.addMedia = this;         // adding this book into the Catalog array mediaAvailable[]
    }

    get author(){               // 13. 
        return this._author;
    }
    get pages(){
        return this._pages;
    }

    set author(name){
        if (typeof name === 'string'){
            this._author = name;
        }
    }
    set pages(num){
        if (typeof num === 'number' && num > 0){
            this._pages = num;
        }
    }
}

// 2nd subclass             // 14.
class Movie extends Media {
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = [];
        Media.addMedia = this;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
    get movieCast(){
        return this._movieCast;
    }

    set movieCast(actor){                   // 25.1
        if (typeof actor === 'string'){
            this.movieCast.push(actor);
            console.log(`"${actor}" successfully added to the cast of "${this.title}"`);
        }
    }

}

// 3rd subclass             // 25. 2
class CD extends Media {
    constructor(artist, title){
        super(title);
        this._artist = artist;
        this._songs = [];
        Media.addMedia = this;
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }

    addSong(name, duration){
        if (typeof name === 'string' && typeof duration === 'number' && duration > 0){
            let minutes = Math.floor(duration / 60);
            let seconds = duration % 60;   // getting the remainder 

            this.songs.push( { name: name, duration: duration } );          // pushing the whole object 
            console.log(`"${name}" with a duration of "${minutes}-min-${seconds}-sec", has been added to the "${this.title}" CD`);
        } else {
            console.log(`Could add song into "${this.title}" CD. Please provide the name of the song and duration in seconds`);
        }
    }
   
    songTitles(){
        return this.songs.name;
    }

    shuffle(){

        console.log('=== Your shuffle ===')
        // Fisher-Yates shuffle algorithm:
        
        const shuffledSongs = this.songs.slice();
        // 1. creating a copy of the array

        for (let i = shuffledSongs.length - 1; i > 0; i--){
        // 2. loop backwards from the last elemnt to the second element

            const j = Math.floor(Math.random() * (i + 1));
            // 3. pick a random index 'j' from 0 up to and including the current index 'i'.

            [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
            // 4. swap the elements at the current index 'i' and the random index 'j'
        }
        return shuffledSongs;

        // first aproach     // wrong
        // const songsShuffled = this.songs.map(() => {
        //     let random = Math.floor(Math.random() * this.songs.length);
        //     return this.songs[random];
        // });
        // return songsShuffled;
    }
}




// Book instance ---
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544); // 15.
historyOfEverything.toggleCheckOutStatus();     // 16.
console.log(historyOfEverything.isCheckedOut);   // 17. output : true

// 18.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());    // 19.

console.log(`---`);
// Movie instance ----
const speed = new Movie('Jan de Bont', 'Speed', 116);   // 20.
speed.toggleCheckOutStatus();       // 21.
console.log(speed.isCheckedOut);    // 22.

// 23. 
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());     // 24.
speed.movieCast = 'Keanu Reeves';
speed.movieCast = 'Sandra Bullock';
speed.movieCast = 'Jeff Daniels'

console.log(`---`);
// CD instance
const continuum = new CD('John Mayer', 'Continuum');

continuum.addRating(5);
continuum.addRating(4);
continuum.addRating(5);

// adding songs:
continuum.addSong('Waiting on the World to Change', 201);
continuum.addSong(`I Don't Trust Myself (With Loving You)`, 292);
continuum.addSong(`Belief`, 242);
continuum.addSong(`Gravity`, 245);
continuum.addSong(`The Heart of Life`, 199);
continuum.addSong(`Vultures`, 251);
continuum.addSong(`Stop This Train`, 288);
continuum.addSong(`Slow Dancing in a Burning Room`, 242);
continuum.addSong(`Bold as Love (The Jimi Hendrix Experience cover)`, 258);
continuum.addSong(`Dreaming with a Broken Heart`, 247);
continuum.addSong(`In Repair`, 369);
continuum.addSong(`I'm Gonna Find Another You`, 163);

console.log(continuum.shuffle());

// printing catalog of the library:
console.log(`=== Catalog Of The Current Media Available in The Library ===`);
console.log(Catalog.mediaAvailable);


/*
    trying here to assing each subclass instance into the array that corresponds the instance
    but JavaScript does not support double inheritance to add instance directly to the arrays placed in Catalog class.
    Ended up placing each media into the Catalog Array _mediaAvailable

class Catalog {
    static _bookList = [];
    static _movieList = [];
    static _cdList = [];

    static get bookList(){
        return this._booksList;
    }
    static get movieList(){
        return this._movieList;
    }
    static get cdList(){
        return this._cdList;
    }

    static set bookObject(book){
        this.bookList.push(book);
    }
    static set movieObject(movie){
        this.movieList.push(movie);
    }
    static set cdOject(cd){
        this.cdList.push(cd);
    }
}

*/
// Team stats 

const team = {      // 1.
    _players: [                                     // 2. array of objects
        { firstName: 'Lebron', lastName: 'James', age: 40 },    // 3.
        { firstName: 'Paul', lastName: 'George', age: 35 },
        { firstName: 'Kobe', lastName: 'Bryant', age: 39 }
    ],
    _games: [                                       // 4.
        { opponent: 'Heat', teamPoints: 98, opponentPoints: 100 },
        { opponent: 'Hornets', teamPoints: 88, opponentPoints: 89 },
        { opponent: 'Spurs', teamPoints: 80, opponentPoints: 89 }
    ],

    get players(){      // 5.
        return this._players;
    },
    get games(){        // 6.
        return this._games;
    },
                                                            // 7.  method used to add object inside '_players' object array 
    addPlayer(newFirstName, newLastName, newAge){
        if(typeof newFirstName === 'string' && typeof newLastName === 'string' && typeof newAge === 'number'){
            const player = {
                firstName: newFirstName,
                lastName: newLastName,
                age: newAge
            };
            this._players.push(player);    // pushing the whole object with parameter values isnide the array '_player'
        }else {
            console.log(`Place the name and lastname as a string of characters and the age as a number`);
        }
    }, 
                                                            // 9.  method used to add object inside '_games' object array
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
        if(typeof newOpponent === 'string' && typeof newTeamPoints === 'number' && typeof newOpponentPoints === 'number'){
            const game = {
                opponent: newOpponent,
                teamPoints: newTeamPoints,
                opponentPoints: newOpponentPoints
            };
            this._games.push(game);
        }else {
            console.log(`Place the name of the opponent as a string and each respective points info as a number`);
        }
    }
};


team.addPlayer('Bugs', 'Bunny', 76);     // 8. using method addPlayer()
team.addPlayer('Michael', 'Jordan', 32);
team.addPlayer('Rodrigo', 'Casio', 25);
team.addPlayer('Stephen', 'Curry', 30);
team.addPlayer('Kyrie', 'Irving', 32);
console.log(team.players);          // using the getter 'players' checking if it returns the array of objects: '_players'

console.log(`----`);

team.addGame('Titans', 100, 98);       //10. using method addGame()
team.addGame('Celtics', 102, 123);
team.addGame('Lakers', 120, 121);
team.addGame('Warriors', 98, 100);
console.log(team.games);           // using the getter 'games' checking if it returns the array of objects '_games'












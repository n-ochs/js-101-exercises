// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

const player1 = 'paper';
const player2 = 'rock';

function rockPaperScissors(player1, player2) {
    let result = '';
    if(player1 == player2) {
        result = 'Draw';
    }
    else if ((player1 == 'rock' && player2 == 'scissors') || (player1 == 'paper' && player2 == 'rock') || (player1 == 'scissors' && player2 == 'paper')) {
        result = 'Player 1 wins!'
    }
    else if((player2 == 'rock' && player1 == 'scissors') || (player2 == 'paper' && player1 == 'rock') || (player2 == 'scissors' && player1 == 'paper')) {
        result = 'Player 2 wins!'
    }
    else {
        result = 'Invalid input'
    }
    return result;
}

console.log(rockPaperScissors(player1, player2))
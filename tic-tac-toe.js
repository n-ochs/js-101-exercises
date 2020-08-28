// Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by

// returning 'O' if O makes a row returning 'X' if X makes a row return null if neither makes a row

const board = {
    row1: ['O', null, 'O'],
    row2: ['X', 'X', 'X'],
    row3: [null, 'X', null],
}

function ticTacToe() {
    const scenario1 = (
        (board.row1[0] == 'O' && board.row1[1] == 'O' && board.row1[2] == 'O') || //top row
        (board.row2[0] == 'O' && board.row2[1] == 'O' && board.row2[2] == 'O') || //middle row
        (board.row3[0] == 'O' && board.row3[1] == 'O' && board.row3[2] == 'O') || //bottom row
        (board.row1[0] == 'O' && board.row2[0] == 'O' && board.row3[0] == 'O') || //first column
        (board.row1[1] == 'O' && board.row2[1] == 'O' && board.row3[1] == 'O') || //second column
        (board.row1[2] == 'O' && board.row2[2] == 'O' && board.row3[2] == 'O') || //third column
        (board.row1[0] == 'O' && board.row2[1] == 'O' && board.row3[2] == 'O') || //top left to bottom right diagonal
        (board.row1[2] == 'O' && board.row2[1] == 'O' && board.row3[0] == 'O')); //top right to bottom left diagonal
    const scenario2 = (
        (board.row1[0] == 'X' && board.row1[1] == 'X' && board.row1[2] == 'X') || //top row
        (board.row2[0] == 'X' && board.row2[1] == 'X' && board.row2[2] == 'X') || //middle row
        (board.row3[0] == 'X' && board.row3[1] == 'X' && board.row3[2] == 'X') || //bottom row
        (board.row1[0] == 'X' && board.row2[0] == 'X' && board.row3[0] == 'X') || //first column
        (board.row1[1] == 'X' && board.row2[1] == 'X' && board.row3[1] == 'X') || //second column
        (board.row1[2] == 'X' && board.row2[2] == 'X' && board.row3[2] == 'X') || //third column
        (board.row1[0] == 'X' && board.row2[1] == 'X' && board.row3[2] == 'X') || //top left to bottom right diagonal
        (board.row1[2] == 'X' && board.row2[1] == 'X' && board.row3[0] == 'X')); //top right to bottom left diagonal
    if(scenario1) {
    console.log('O');
    }
    else if(scenario2) {
    console.log('X');
    }
    else {
    console.log(null)
    }
}

ticTacToe(board)
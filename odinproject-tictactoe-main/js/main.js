const btnStart = document.querySelector("#startGame");
btnStart.addEventListener('click', () => {
    startGame();
})

const Player = (function (playerName, playerSymbol) {
    const players = [];

    function createPlayers(playerName, playerSymbol) {
        return { playerName, playerSymbol };
    }

    function addPlayer(playerName, playerSymbol) {
        checkNumberOfPlayers();
        players.push(createPlayers(playerName, playerSymbol));
    }
    // Public interface (returned object)
    return {
        addPlayer, players
    };
})();

const gameBoard = (function () {

    let board = createBoard();
    function createBoard() {
        const basicArray = new Array(9).fill(null);
        return basicArray;
    }

    function resetBoard() {
        board = board.splice(0, board.length)
    }

    // Public interface (returned object)
    return {
        board, resetBoard
    }
})();

/* 
-------------------------------------------------------------------
"player one" gets five turns while "player two" gets four turns. 
Its possible to have fewer turns if a player wins before turn nine.
-----------------------------------------------------------------------------------------------
Turn five is the earliest that "player one" could win which would be their third piece placed. 
Turn six is the earliest "player 2" could win which would be their third piece that was placed.
-----------------------------------------------------------------------------------------------
Horizontal: (1, 2, 3), (4, 5, 6), (7, 8, 9); | 
Vertical: (1, 4, 7), (2, 5, 8), (3, 6, 9); | 
Diagonal: (1, 5, 9), (3, 5, 7);
-----------------------------------------------
 */

/* at the beginning of each turn, check victory condition against the possible win conditions. */
/*  if there are differing symbols in any row, col, or diag we remove that possible win config.  */
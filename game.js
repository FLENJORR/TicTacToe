//reset game status
function resetGame() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOver.firstElementChild.innerHTML = 'You Won, <span id="winner-name">WINNER NAME</span>';
    gameOver.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItem = gameBoard.children[gameBoardIndex];
            gameBoardItem.textContent = '';
            gameBoardItem.classList.remove('disabled')
            gameBoardIndex++;
        }
    }
}


function startNewGame() {
    if(players[0].name === '' || players[1].name === '') {
        alert('Please enter name for both players !')
        return; // enter player names first
    }

    resetGame();

    playerName.textContent = players[activePlayer].name

    //make game field visible #active-game
    let gameArea = document.getElementById('active-game')
    gameArea.style.display = 'block';
}

// managing game rounds --- making game field clickable-- checking for winner
function selectGameField(event) {
    if(event.target.tagName !== 'LI' || gameIsOver) {
        return;
    }

    const selectedField = event.target;
    const selectedCol = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if(gameData[selectedRow][selectedCol] > 0) {
        alert('Please select an empty field')
        return;
    }

    selectedField.textContent = players[activePlayer].symbol // players[0]
    selectedField.classList.add('disabled');

  

    // update game data
    gameData[selectedRow][selectedCol] = activePlayer + 1;
    
    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();
};

// switch players

function switchPlayer () {
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    playerName.textContent = players[activePlayer].name
};

// check for game over

function checkForGameOver() {
    // checking the rows for equality
    for(let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 && 
            gameData[i][0] === gameData[i][1] && 
            gameData[i][1] === gameData[i][2]) 
            {
            return gameData[i][0];
        }
    };

    // check for column equality
    for(let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 && 
            gameData[0][i] === gameData[1][i] && 
            gameData[0][i] === gameData[2][i]) 
            {
            return gameData[0][i];
        }

    }
     // check diagonal -- top left to bottom right 
    if(gameData[0][0] > 0 && 
        gameData[0][0] === gameData[1][1] && 
        gameData[1][1] === gameData[2][2]) {
            return gameData[0][0]
        }

        // bottom let to top right
    if(gameData[2][0] > 0 && 
        gameData[2][0] === gameData[1][1] && 
        gameData[1][1] === gameData[0][2]) {
            return gameData[2][0]
        }

        if(currentRound === 9) {
            // return -1;
            alert("It's a tie!");
        }
        return 0;

}

// end game and start new game
// showing name of winner...........................

function endGame(winnerId) {
    gameIsOver = true;
    gameOver.style.display = 'block';

    if (winnerId > 0) {
    let gameWinner = players[winnerId - 1].name;
    let winnerName = document.getElementById('winner-name');
    winnerName.textContent = gameWinner + ' !';
    } else {
        alert('it\'s a draw !')
    }
    // console.log(endGame)
}


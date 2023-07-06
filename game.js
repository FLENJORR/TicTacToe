// enter player names first
function startNewGame() {
    // if(players[0].name === '' || players[1].name === '') {
    //     alert('Please enter name for both players !')
    //     return;
    // }

    playerName.textContent = players[activePlayer].name

    //make game field visible #active-game
    let gameArea = document.getElementById('active-game')
    gameArea.style.display = 'block';
}

// managing game rounds --- making game field clickable-- checking for winner
function selectGameField(event) {
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
    console.log(winnerId);
    
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

        return 0;

   
    // if (gameData[1][0] > 0 && 
    //     gameData[1][0] === gameData[1][1] && 
    //     gameData[1][1] === gameData[1][2]) 
    //     {
    //     return gameData[1][0];
    // }
    // if (gameData[2][0] > 0 && 
    //     gameData[2][0] === gameData[2][1] && 
    //     gameData[2][1] === gameData[2][2]) 
    //     {
    //     return gameData[2][0];
    // }



}


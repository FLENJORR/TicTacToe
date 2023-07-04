// enter player names first
function startNewGame() {
    if(players[0].name === '' || players[1].name === '') {
        alert('Please enter name for both players !')
        return;
    }

    playerName.textContent = players[activePlayer].name

    //make game field visible #active-game
    let gameArea = document.getElementById('active-game')
    gameArea.style.display = 'block';
}

// managing game rounds --- making game field clickable 
function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol // players[0]
    event.target.classList.add('disabled');

    
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



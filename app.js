// MAKING OUR GAME CONFIGURABLE
//MAKING BUTTONS CLICKABLE

const player1Btn = document.getElementById('edit-player1-btn');
const player2Btn = document.getElementById('edit-player2-btn');

// opening and closing overlay
const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const cancel = document.getElementById('cancel');

// form submission -- updtaing player name

const formElement = document.querySelector('form');
const outputError = document.getElementById('output-error');

//storing and managing submitted data
let editedPlayer = 0;

//storing player name in our JS code
const players = [
    {
        name: '',
        symbol: 'X'
    },

    {
        name: '',
        symbol: 'O'
    }
];




// click events
player1Btn.addEventListener('click', openPlayerEdit);
player2Btn.addEventListener('click', openPlayerEdit);
cancel.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
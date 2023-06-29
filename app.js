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




// click events
player1Btn.addEventListener('click', openPlayer1Edit);
player2Btn.addEventListener('click', openPlayer1Edit);
cancel.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
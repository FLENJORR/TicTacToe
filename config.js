//open overlay

function openPlayerEdit(event) {
    editedPlayer = +event.target.dataset.playerid; //storing the ID of the player
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

//close overlay

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';

    formElement.firstElementChild.lastElementChild.value = '' //reset whats entered in the input 
}

// form submission
 function savePlayerConfig(event) {
     event.preventDefault(); // prevent browser from carrying out default function on for submission
     const formData = new FormData(event.target);
     const enteredPlayerName = formData.get('playername').trim(); //trims extra whitespace

    // validating user input
    if(!enteredPlayerName) {
        alert('Please enter a valid name');
        // outputError.textContent = 'please enter a valid name!'
        return;
    } 

    // storing and managing data submitted

    const updatedPlayerData = document.getElementById('player' + editedPlayer + '-data');
    updatedPlayerData.children[1].textContent = enteredPlayerName; //updating player name (h3 element)

    //storing player name in our JS code

    // if(editedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     players[1].name = enteredPlayerName
    // }  
    //OR

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}


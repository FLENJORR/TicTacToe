//open overlay

function openPlayer1Edit() {
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

//close overlay

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
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

}
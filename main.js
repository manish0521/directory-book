window.onload = init;

// Set up all event listeners.
function init() {
    // When they click the add todo button, run `addTodo`.
    document.querySelector('#search')
        .addEventListener('click', search);
        
        // When they click the clear done todos button, run `clearDoneTodos`.
    document.querySelector('#display-all')
        .addEventListener('click', displayAll);
        
     

}

function search(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

}

function displayAll(event) {
    // Stop page from reloading on button click.
    event.preventDefault();
 
     // Add value to everything on the list.
     for(let i = 0; i < countries.length; i++) {
         console.log(countries[i]);
     }
 
     // Update our html.
     updateUL();

}


function updateUL() {
    clearUL();
    for (let i = 0; i < countries.length; i++) {
        addToUL(countries[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('#list');
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const ul = document.querySelector('#list');
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    ul.appendChild(newLI);
}
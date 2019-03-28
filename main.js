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
        addToUL(countries[i]);
     }

}


// Append to the UL.
function addToUL(country) {
    const ul = document.querySelector('#list');
    const nationLI = document.createElement('li');
    const capitalLI = document.createElement('li');
    const statesLI = document.createElement('li');
    const populationLI = document.createElement('li');
    const attractLI = document.createElement('li');
     
    nationLI.innerText = country.nation;
    capitalLI.innerText = country.capital;
    statesLI.innerText = country.states;
    populationLI.innerText = country.population;
    attractLI.innerText = country.attraction;

    
    ul.appendChild(nationLI);
    ul.appendChild(capitalLI);
    ul.appendChild(statesLI);
    ul.appendChild(populationLI);
    ul.appendChild(attractLI);

}
window.onload = init;

// Set up all event listeners.
function init() {
    // When they click the add todo button, run `addTodo`.
    document.querySelector('#search')
        .addEventListener('click', toSearch);
        
        // When they click the clear done todos button, run `clearDoneTodos`.
    document.querySelector('#display-all')
        .addEventListener('click', displayAll);
        
     

}

function toSearch(event) {
    // Stop page from reloading on button click.
    event.preventDefault();

    const search = document.querySelector('#search-input').value;

    for(let i = 0; i < countries.length; i++) {
      
        if(search === countries[i].nation) {
            addToUL(countries[i]);
        }    
        if (search === countries[i].capital) {
        addToUL(countries[i]);
        }
        if (search === countries[i].states) {
            addToUL(countries[i]);
        }
        if (search === countries[i].population) {
            addToUL(countries[i]);
        }
        if (search === countries[i].attraction) {
            addToUL(countries[i]);
        }
    }
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
     
    nationLI.innerText = "Country : " + country.nation;
    capitalLI.innerText = "Capital : " + country.capital;
    statesLI.innerText = " No. of States : " + country.states;
    populationLI.innerText = "Population : " + country.population;
    attractLI.innerText = "Popular Attraction : " + country.attraction;

    capitalLI.className = 'indent' ; 
    statesLI.className = 'indent' ;
    populationLI.className = 'indent' ;
    attractLI.className = 'indent' ;



    
    ul.appendChild(nationLI);
    ul.appendChild(capitalLI);
    ul.appendChild(statesLI);
    ul.appendChild(populationLI);
    ul.appendChild(attractLI);

}
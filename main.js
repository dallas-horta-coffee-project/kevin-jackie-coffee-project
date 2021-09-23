"use strict"
// Puts coffee data into table from JavaScript
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}
// Converts table data into strings
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (roastSelection.value === 'all') {
			filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// Coffe Table Content //
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//Live Search Function
function liveSearchCoffees(input) {
	// making sure all inputs are lowercase
	var searchCoffees = searchArea.value.toLowerCase();
	var searchedCoffees = [];
	console.log(searchedCoffees);
	
}

var searchArea = document.querySelector('#search-area');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

// exports data to the table in html
var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);

// Default submit button action (line 60)
submitButton.addEventListener('click', updateCoffees);

// Used preventDefault to stop the normal action of the submit button
// submitButton.addEventListener('click', function (e) {
// 	e.preventDefault(updateCoffees);
// });

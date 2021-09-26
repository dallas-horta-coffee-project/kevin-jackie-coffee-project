"use strict"
// Puts coffee data into table from JavaScript
function renderCoffee(coffee) {
    var html = '<div class="row">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<span class="coffee-name p-3">' + '<strong>' + coffee.name + '</strong>' + '</span>';
    html += '<span class="coffee-roast p-3">' +  '<p>' + coffee.roast + '</p>' + '</span>';
    html += '</div>';

    var html = '<div class="coffee col-6">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h4 id="coffeepot">' + '<span class="p-2">' + coffee.name + "</span>" + '</h4>';
    html += '<p id="coffeepot2">' + '<span class="p-2">' + coffee.roast + "</span>" + '</p>';
    html += '</div>'
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

// Coffee Table Content //
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
//Takes in input from the Page, Stores it into the existing Coffee List

var inputArea = document.querySelector("#input-area")
var roastType = document.querySelector("#roast-type")
var AddCoffeeButton = document.querySelector("#add-coffee")



function addYourOwnCoffees(e) {
	e.preventDefault();
	var ownName = inputArea.value.toString();
	var ownRoast = roastType.value.toString();
	// var addedCoffees = [];
	var newCoffees = {
		name: ownName,
		roast: ownRoast
	}
	// addedCoffees.push(newCoffees);
	coffees.push(newCoffees);
	tbody.innerHTML = renderCoffees(coffees);
}
AddCoffeeButton.addEventListener('click', addYourOwnCoffees);
// function addYourOwnCoffees (input) {
//     var ownID = coffees.length+1;
//     var ownName = inputArea.value.toString();
//     var ownRoast = roastType.value.toString();
// 	var newCoffees = [];
//     input = {id: ownID, name: ownName, roast: ownRoast};
//     newCoffees.push(input);
// 	localStorage.setItem('newCoffee', JSON.stringify(newCoffees));
// 	var addNewCoffee = function () {
// 		var addedCoffees = {}
// 		addedCoffees.push(JSON.parse(localStorage.getItem('newCoffee')));
// 	}
// 	coffees.push(addedCoffees);
//     // console.log(coffees);
//     tbody.innerHTML = renderCoffees(coffees)
// }


//Live Search Function
function liveSearchCoffees() {
	// making sure all inputs are lowercase
	var searchCoffees = searchArea.value.toLowerCase();
	console.log(searchCoffees)
	var searchedCoffees = [];
	// console.log(searchedCoffees);
	coffees.forEach((coffee) => {
		if (coffee.name.toLowerCase().includes(searchCoffees)) {
			searchedCoffees.push(coffee);
		}
	})
	// console.log(searchedCoffees);
	tbody.innerHTML = renderCoffees(searchedCoffees);
}
//Live Search Function working
var searchArea = document.querySelector('#search-area');
searchArea.addEventListener('keyup', liveSearchCoffees);
var submitButton = document.querySelector('#submit');

//Roast Selection Function to update without clicking submit
function updateRoastSelection() {
	// e.preventDefault();
	var selectedRoast = roastSelection.value;
	console.log(selectedRoast);
	var roastSelect = [];
	coffees.forEach((coffee) => {
		if (coffee.roast === selectedRoast) {
			roastSelect.push(coffee);
			// console.log(selectedRoast)
		} else if (roastSelection.value === 'all'){
		    roastSelect.push(coffee);
        }
		
	})
	tbody.innerHTML = renderCoffees(roastSelect);
}
// var roastOptions = document.getSelection()
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener("change", updateRoastSelection);


// exports data to the table in html
var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);

// Default submit button action (line 60)
// submitButton.addEventListener('click', updateCoffees);

// Used preventDefault to stop the normal action of the submit button
submitButton.addEventListener('click', function (e) {
	e.preventDefault(updateCoffees);
});

// var coffeeNameStyle = document.getElementsByClassName('coffee-name');
// coffeeNameStyle.style.fontWeight = 'bold';

//Adds New Coffee List to the Existing List Already
var NewCoffeeList = document.querySelector('#add-coffee');
NewCoffeeList.innerHTML = renderCoffees(coffees);
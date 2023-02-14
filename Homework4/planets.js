// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:

// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1

// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2

BASE_URL1 = "https://swapi.dev/api/planets/?page=1"
BASE_URL2 = "https://swapi.dev/api/planets/?page=2";

let firstTenPlanets = document.getElementById("firstBtn");
let nextDiv = document.getElementById("nextDiv");
// let result = document.getElementById("result");

firstTenPlanets.addEventListener("click", function(){
    fetchDataFromAPI(BASE_URL1);
    nextTenPlanets();
})

async function fetchDataFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    planetData(data.results);
} 


function planetData(planetsStarWars) {

    let table = document.createElement("table");
    table.innerHTML = "";
    
    // document.body.appendChild(table);


    let headerRow = document.createElement('thead');
    let planetNameCol= document.createElement('th');
    planetNameCol.innerHTML = "Planet Name";
    let populationCol = document.createElement('th');
    populationCol.innerHTML = "Population";
    let climateCol = document.createElement('th');
    climateCol.innerHTML = "Climate";
    let gravityCol = document.createElement('th');
    gravityCol.innerHTML = "Gravity";
    headerRow.appendChild(planetNameCol);
    headerRow.appendChild(populationCol);
    headerRow.appendChild(climateCol);
    headerRow.appendChild(gravityCol);
    table.appendChild(headerRow); 

    let tbody = document.createElement('tbody');

    for (let planet of planetsStarWars) {
        tbody.innerHTML += `
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
        `
    }

    table.appendChild(tbody);
    nextDiv.appendChild(table);

}

function nextTenPlanets () {
    let nextTenPlanetsBtn = document.createElement('button');
    nextTenPlanetsBtn.classList.add("nextTenBtn");
    nextTenPlanetsBtn.innerText = "Show next 10 planets";
    nextDiv.innerHTML = "";
    nextDiv.appendChild(nextTenPlanetsBtn);
    nextTenPlanetsBtn.addEventListener("click", function (){
        fetchDataFromAPI(BASE_URL2);
        previousTenPlanets()
    });

}

function previousTenPlanets () {
    let previousTenPlanetsBtn = document.createElement('button');
    previousTenPlanetsBtn.classList.add("previousTenBtn");
    previousTenPlanetsBtn.innerText = "Show previous 10 planets";
    nextDiv.innerHTML = "";
    nextDiv.appendChild(previousTenPlanetsBtn);
    previousTenPlanetsBtn.addEventListener("click", function (){
        fetchDataFromAPI(BASE_URL1);
        nextTenPlanets();
    });

}
   
   




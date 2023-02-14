BASE_URL1 = "https://swapi.dev/api/";
URL_PEOPLE = "https://swapi.dev/api/people/?page=1";
URL_SHIPS = "https://swapi.dev/api/starships/?page=1";

let rocketBTN = document.getElementById("rocket");
let cosmonautBTN = document.getElementById("cosmonaut"); 

async function fetchDataFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

}

rocketBTN.addEventListener("click", function(){
    fetchDataFromAPI(URL_SHIPS);
    
});


cosmonautBTN.addEventListener("click", function(){
    fetchDataFromAPI(URL_PEOPLE);
    
});


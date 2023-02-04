$(document).ready(function() {
    let callBtn = document.getElementById("callBtn");
    let result = document.getElementById("result");

    let table = document.createElement('table');
    document.body.appendChild(table);

    callBtn.addEventListener("click", function(e){
        $.ajax({
            url:"https://swapi.dev/api/people/1",
            method: "GET",
            success: function(response){
                console.log("Success!");
                console.log(response);
                // let responseObject = JSON.parse(response);
                let resultTitle = result.getElementsByTagName("h1")[0];
                resultTitle.innerHTML = `${response.name}`;
                

                let headers = ['Height', 'Weight', 'Eye Color', 'Hair Color'];
                
                    table.innerHTML = "";
                    let headerRow = document.createElement('tr');
                    let heightCol= document.createElement('th');
                    heightCol.innerHTML = "Height";
                    let weightCol = document.createElement('th');
                    weightCol.innerHTML = "Weight";
                    let eyeColorCol = document.createElement('th');
                    eyeColorCol.innerHTML = "Eye Color";
                    let hairColorCol = document.createElement('th');
                    hairColorCol.innerHTML = "Hair Color";
                    headerRow.appendChild(heightCol);
                    headerRow.appendChild(weightCol);
                    headerRow.appendChild(eyeColorCol);
                    headerRow.appendChild(hairColorCol);
                    table.appendChild(headerRow);   
                    
                    
                    let row = document.createElement('tr');
                    let height = document.createElement('td');
                    height.innerHTML = `${response.height}`;
                    let weight = document.createElement('td');
                    weight.innerHTML = `${response.mass}`;
                    let eyeColor = document.createElement('td');
                    eyeColor.innerHTML = `${response.eye_color
                    }`;
                    let hairColor = document.createElement('td');
                    hairColor.innerHTML = `${response.hair_color}`;
                    row.appendChild(height);
                    row.appendChild(weight);
                    row.appendChild(eyeColor);
                    row.appendChild(hairColor);
                    
                    table.appendChild(row); 
            },
            error: function(error){
                console.log(error);
            }
        })
    })
})
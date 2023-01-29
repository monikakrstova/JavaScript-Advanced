$(document).ready(function() {
    let callBtn = document.getElementById("callBtn");
    let result = document.getElementById("result");
    callBtn.addEventListener("click", function(e){
        $.ajax({
            url:"https://swapi.dev/api/people/1",
            method: "GET",
            success: function(response){
                console.log("Success!");
                console.log(response);
                // let responseObject = JSON.parse(response);
                // let resultTitle = result.getElementsByTagName("h1")[0];
                // let resultTable = result.getElementsByTagName("table")[0];
                let table = document.createElement('table');
                let headerRow = document.createElement('tr');
                let headers = ['Height', 'Weight', 'Eye Color', 'Hair Color'];
                headers.forEach(headerContent => {
                    let header = document.createElement('th');
                    let textNode = document.createTextNode(headerContent);
                    header.appendChild(textNode);
                    headerRow.appendChild(header);
                });
                table.appendChild(headerRow);

                // let height = result.getElementsByTagName("th")[0];
                // let weight = result.getElementsByTagName("th")[1];
                // let eyeColor = result.getElementsByTagName("th")[2];
                // let hairColor = result.getElementsByTagName("th")[3];
                // resultTitle.innerText = `${response.name}`;
                // height.innerText = `Height: ${response.height}`;
                // weight.innerText = `Weight: ${response.mass}`;
                // eyeColor.innerText = `Eye Color: ${response.eye_color}`;
                // hairColor.innerText = `Hair Color: ${response.hair_color}`;
                // resultTable.appendChild(document.createElement ('th'));

                // function createColumn (name) {
                //     let column = document.createElement ('th');
                //     column.textContent = name;
                //     return column;
                // }
                // function createRow (name) {
                //     let row = document.createElement ('td');
                //     row.textContent = name;
                //     return row;
                // }

                // resultTable.appendChild(createColumn('Height'));
                // resultTable.appendChild(createColumn('Weight'));
                // resultTable.appendChild(createColumn('Eye Color'));
                // resultTable.appendChild(createColumn('Hair color'));
                // resultTable.appendChild(createRow(`${response.height}`));
                // resultTable.appendChild(createRow(`${response.mass}`));
                // resultTable.appendChild(createRow(`${response.eye_color}`));
                // resultTable.appendChild(createRow(`${response.hair_color}`));
                
                
                
                
            },
            error: function(error){
                console.log(error);
            }
        })
    })
})
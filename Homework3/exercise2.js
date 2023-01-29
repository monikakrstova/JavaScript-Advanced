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
                let resultTitle = result.getElementsByTagName("h1")[0];
                resultTitle.innerHTML = `${response.name}`;
                
                let table = document.createElement('table');
                document.body.appendChild(table);
                let headers = ['Height', 'Weight', 'Eye Color', 'Hair Color'];
                callBtn.addEventListener("click", function(){
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
                });
                // headers.forEach(headerContent => {
                //     let header = document.createElement('th');
                //     let textNode = document.createTextNode(headerContent);
                //     header.appendChild(textNode);
                //     headerRow.appendChild(header);
                // });
                // table.appendChild(headerRow);

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

                //  resultTable.appendChild(createColumn('Height'));
                //  resultTable.appendChild(createColumn('Weight'));
                //  resultTable.appendChild(createColumn('Eye Color'));
                //  resultTable.appendChild(createColumn('Hair color'));
                //  resultTable.appendChild(createRow(`${response.height}`));
                //  resultTable.appendChild(createRow(`${response.mass}`));
                //  resultTable.appendChild(createRow(`${response.eye_color}`));
                //  resultTable.appendChild(createRow(`${response.hair_color}`));
                
                
                
                
            },
            error: function(error){
                console.log(error);
            }
        })
    })
})
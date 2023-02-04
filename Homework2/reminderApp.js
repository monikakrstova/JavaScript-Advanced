let titleElem = document.getElementById("title");
let priorityElem = document.getElementById("priority");
let colorElem = document.getElementById("color");
let descriptionElem = document.getElementById("description");
let createBtn = document.getElementById("createRemainderButton");
let showBtn = document.getElementById("showRemainderButton");


function Reminder (title, priority, color, description) {
    this.title = title;
    this.priority =  priority;
    this.color = color;
    this.description =  description;
    
}

let reminders = [];
createBtn.addEventListener("click", function(e){
    if(!titleElem.value){
        return;
    }
    if (!priorityElem.value) {
        return;
    }
    if (!colorElem.value){
        return;
    }
    if (!descriptionElem.value){
        return;
    } else {
    reminders.push(new Reminder(titleElem.value, priorityElem.value, colorElem.value, descriptionElem.value));
    titleElem.value = "";
    priorityElem.value = "";
    colorElem.value = "#000000";
    descriptionElem.value = "";
    }
})


let table = document.createElement('table');
document.body.appendChild(table);

showBtn.addEventListener("click", function (){
    if (!reminders.length){
        alert('No reminders to show');
        return;
    }
    table.innerHTML = "";
    let headerRow = document.createElement('tr');
    let headerTitle = document.createElement('th');
    headerTitle.innerHTML = "Title";
    let priorityCol = document.createElement('th');
    priorityCol.innerHTML = "Priority";
    let descriptionCol = document.createElement('th');
    descriptionCol.innerHTML = "Description";
    headerRow.appendChild(headerTitle);
    headerRow.appendChild(priorityCol);
    headerRow.appendChild(descriptionCol);
    table.appendChild(headerRow);
    for (const reminder of reminders) {
        let row = document.createElement('tr');
        let title = document.createElement('td');
        title.innerHTML = reminder.title;
        let priority = document.createElement('td');
        priority.innerHTML = reminder.priority;
        let description = document.createElement('td');
        description.innerHTML = reminder.description;
        title.style.color=reminder.color;
        row.appendChild(title);
        row.appendChild(priority);
        row.appendChild(description);
        table.appendChild(row);
    }

});
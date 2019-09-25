let meanCalc = document.getElementById("mean");
let weightCalc = document.getElementById("weighted");
let newRow = document.getElementById("rowAdd");
let displayChange = document.getElementById("darkMode");

var reg = new RegExp('^[0-9]+$');

let numActivities = 4;
let displayMode = "light";

for (let i = 1; i <= numActivities; i++) {
    let currentIteration = i;

    let score = document.getElementById(`scoredA${i}`);
    let total = document.getElementById(`totalA${i}`);
    let weight = document.getElementById(`weightA${i}`);

    score.addEventListener("input", function () {
        let percent = document.getElementById(`percent${currentIteration}`);
        let grade = (parseFloat(score.value) / parseFloat(total.value) * 100).toFixed(2);

        if (score.value == "" && total.value == "") {
            percent.innerHTML = "";
        }
        else {
            if((isNaN(grade) || grade < 0) && score.value != ""){
                percent.innerHTML = "ERROR: Invalid grade input, enter a numeric value greater or equal 0"
            }
            else{
                percent.innerHTML = `${grade}`;
            }
        }
    });

    total.addEventListener("input", function () {
        let percent = document.getElementById(`percent${currentIteration}`);
        let grade = (parseFloat(score.value) / parseFloat(total.value) * 100).toFixed(2);

        if (score.value == "" && total.value == "") {
            percent.innerHTML = "";
        }
        else {
            if((isNaN(grade) || grade < 0) && total.value != ""){
                percent.innerHTML = "ERROR: Invalid grade input, enter a numeric value greater or equal 0"
            }
            else{
                percent.innerHTML = `${grade}`;
            }
        }
    });
}

meanCalc.addEventListener("click", function () {
    let percentageTotal = 0;
    let numActivitiesFilled = 0;
    for (let i = 1; i <= numActivities; i++) {
        let gradeVal = parseFloat(document.getElementById(`${"percent" + String(i)}`).innerHTML);

        if (isNaN(gradeVal) == false && gradeVal >= 0) {
            percentageTotal += gradeVal;
            numActivitiesFilled += 1;
        }
        else if(document.getElementById(`${"percent" + String(i)}`).innerHTML != ""){
            alert("ERROR: Missing or invalid input in grade section, please enter the inputs with only numerical values greater or equal to 0");
            return;
        }
    }

    let percentageAvg = percentageTotal / numActivitiesFilled;
    
    if(isNaN(percentageAvg)){
        alert("ERROR: Missing or invalid input in grade section, please enter the inputs with only numerical values greater or equal to 0");
        return;
    }

    document.getElementById("result").innerHTML = `Your mean grade is: ${percentageAvg.toFixed(2)}/100`;
});

weightCalc.addEventListener("click", function(){
    let percentageTotal = 0;
    let weightTotal = 0;

    for (let i = 1; i <= numActivities; i++) {
        let gradeVal = parseFloat(document.getElementById(`${"percent" + String(i)}`).innerHTML);
        let weightVal = parseFloat(document.getElementById(`${"weightA" + String(i)}`).value);

        if (isNaN(gradeVal) == false && gradeVal >= 0) {
            if(isNaN(weightVal) == false){
                weightTotal += weightVal;
                percentageTotal += gradeVal * weightVal / 100;
                console.log(weightVal);
            }
            else{
                alert("ERROR: Missing Input for weight");
                return;
            }
        }
        else if(document.getElementById(`${"percent" + String(i)}`).innerHTML != ""){
            alert("ERROR: Missing or invalid input in grade section, please enter the inputs with only numerical values greater or equal to 0");
            return;
        }
    }

    let percentageAvg = percentageTotal / weightTotal * 100;

    if(isNaN(percentageAvg)){
        alert("ERROR: Missing or invalid input in grade section, please enter the inputs with only numerical values greater or equal to 0");
        return;
    }

    document.getElementById("result").innerHTML = `Your weighted grade is: ${percentageAvg.toFixed(2)}/100`;
});

newRow.addEventListener("click", function () {
    numActivities += 1;
    let currentIteration = numActivities;
    let table = document.getElementById("contentTable");
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("id", `r${numActivities}`)
    tableRow.innerHTML += `<td class ="text">Activity ${numActivities}</td>`;
    tableRow.innerHTML += `<td class ="text">A${numActivities}</td>`;
    tableRow.innerHTML += `<td><input class="input" class ="text" id="weightA${numActivities}"><div id="error${numActivities}"></div></td>`;
    tableRow.innerHTML += `<td class="slash"><input class="input" id="scoredA${numActivities}" class ="text">/<br><input class="input" id="totalA${numActivities}" class ="text"></td>`;
    tableRow.innerHTML += `<td id="percent${numActivities}" class ="text"></td>`;
    table.appendChild(tableRow);

    let score = document.getElementById(`scoredA${numActivities}`);
    let total = document.getElementById(`totalA${numActivities}`);

    score.addEventListener("input", function () {
        let percent = document.getElementById(`percent${currentIteration}`);
        let grade = (parseFloat(score.value) / parseFloat(total.value) * 100).toFixed(2);
        if (score.value == "" && total.value == "") {
            percent.innerHTML = "";
        }
        else {
            percent.innerHTML = `${grade}`;
        }
    });

    total.addEventListener("input", function () {
        let percent = document.getElementById(`percent${currentIteration}`);
        let grade = (parseFloat(score.value) / parseFloat(total.value) * 100).toFixed(2);
        if (score.value == "" && total.value == "") {
            percent.innerHTML = "";
        }
        else {
            percent.innerHTML = `${grade}`;
        }

    });

    let objDiv = document.getElementById("scrollWrap");
    objDiv.scrollTop = objDiv.scrollHeight;

    //Changes the newly added rows to the appropriate mode
    if (displayMode == "light") {
        changeLightMode();
    }
    else {
        changeDarkMode();
    }
});


displayChange.addEventListener("click", function () {
    if (displayMode == "light") {
        changeDarkMode();
    }
    else {
        changeLightMode();
    }
});

function changeLightMode() {
    let text = document.querySelectorAll(".text");
    let body = document.querySelector("body");
    let innerBg = document.getElementById("innerContainer");
    let content = document.getElementById("content");
    let contentTable = document.getElementById("contentTable");
    let outerContainer = document.getElementById("outerContainer")
    let th = document.querySelectorAll("th");
    let input = document.querySelectorAll("input");
    let slash = document.querySelectorAll(".slash");
    let button = document.querySelectorAll("button");
    let h3Text = document.querySelectorAll("h3");

    displayMode = "light";

    displayChange.innerHTML = "Dark Mode";

    slash.forEach(function (e) {
        e.style.color = "black";
    })

    input.forEach(function (e) {
        e.style.backgroundColor = "white";
        e.style.color = "black"
    });

    th.forEach(function (e) {
        e.style.backgroundColor = "lightgrey";
    });

    outerContainer.style.backgroundColor = "#3d3935";
    contentTable.style.backgroundColor = "#e9eff1"
    content.style.backgroundColor = "#e9eff1"
    innerBg.style.backgroundColor = "#fff";
    body.style.backgroundColor = "#a6192e";

    text.forEach(function (e) {
        e.style.color = "black";
    });

    button.forEach(function (e) {
        e.style.background = "#A6192E";
        e.style.color = "white"
    });

    h3Text.forEach(function (e) {
        e.style.color = "#b5111a";
    });
}

function changeDarkMode() {
    let text = document.querySelectorAll(".text");
    let body = document.querySelector("body");
    let innerBg = document.getElementById("innerContainer");
    let content = document.getElementById("content");
    let contentTable = document.getElementById("contentTable");
    let outerContainer = document.getElementById("outerContainer")
    let th = document.querySelectorAll("th");
    let input = document.querySelectorAll("input");
    let slash = document.querySelectorAll(".slash");
    let button = document.querySelectorAll("button");
    let h3Text = document.querySelectorAll("h3");

    displayMode = "dark";

    displayChange.innerHTML = "Light Mode";

    button.forEach(function (e) {
        e.style.background = "#000000";
    });
    slash.forEach(function (e) {
        e.style.color = "white";
    })

    input.forEach(function (e) {
        e.style.backgroundColor = "#181818";
        e.style.color = "white"
    });

    th.forEach(function (e) {
        e.style.backgroundColor = "#282828";
    });

    outerContainer.style.backgroundColor = "#282828";
    contentTable.style.backgroundColor = "#282828"
    content.style.backgroundColor = "#282828"
    innerBg.style.backgroundColor = "#282828";
    body.style.backgroundColor = "#181818";
    text.forEach(function (e) {
        e.style.color = "white";
    });
}
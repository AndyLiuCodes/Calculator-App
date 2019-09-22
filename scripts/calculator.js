let meanCalc = document.getElementById("mean");
let weightCalc = document.getElementById("weighted");
let newRow = document.getElementById("rowAdd");

let numActivities = 4;

for(let i = 1; i <= numActivities; i++){
    let currentIteration = i;

    let score = document.getElementById(`scoredA${i}`);
    let total = document.getElementById(`totalA${i}`);

    score.addEventListener("input", function(){
        let percent = document.getElementById(`percent${currentIteration}`);
        let grade = (parseFloat(score.value)/parseFloat(total.value)*100).toFixed(2);
        if (score.value == "" && total.value =="" ){
            percent.innerHTML = "";
        }
        else{
            percent.innerHTML = `${grade}`;
        }
    });
    
    total.addEventListener("input", function(){
        let percent = document.getElementById(`percent${currentIteration}`);
        let grade = (parseFloat(score.value)/parseFloat(total.value)*100).toFixed(2);
        if (score.value == "" && total.value =="" ){
            percent.innerHTML = "";
        }
        else{
            percent.innerHTML = `${grade}`;
        }
    });
}

meanCalc.addEventListener("click", function(){
    let percentageTotal = 0;
    let numActivitiesFilled = 0;
    for(let i = 1; i <= numActivities; i++){
        let gradeVal = parseFloat(document.getElementById(`${"percent" + String(i)}`).innerHTML); 
        
        if(isNaN(gradeVal) == false){
            percentageTotal += gradeVal;
            numActivitiesFilled += 1;
        }
    }
    
    let percentageAvg = percentageTotal/numActivitiesFilled;

    document.getElementById("result").innerHTML = `Your mean grade is: ${percentageAvg.toFixed(2)}/100`;
});

weightCalc.addEventListener("click", function(){
    let percentageTotal = 0;
    let weightTotal = 0;

    for(let i = 1; i <= numActivities; i++){
        let gradeVal = parseFloat(document.getElementById(`${"percent" + String(i)}`).innerHTML); 
        let weightVal = parseFloat(document.getElementById(`${"weightA" + String(i)}`).value);
        
        if(isNaN(gradeVal) == false){
            weightTotal += weightVal;
            percentageTotal += gradeVal*weightVal/100;
        }
    }

    let percentageAvg = percentageTotal/weightTotal * 100

    document.getElementById("result").innerHTML = `Your weighted grade is: ${percentageAvg}/100`;
});

newRow.addEventListener("click", function(){
    numActivities += 1;
    let currentIteration = numActivities;
    let table = document.getElementById("contentTable");
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("id", `r${numActivities}`)
    tableRow.innerHTML += `<td>Activity ${numActivities}</td>`;
    tableRow.innerHTML += `<td>A${numActivities}</td>`;
    tableRow.innerHTML += `<td><input class="input" id="weightA${numActivities}"></td>`;
    tableRow.innerHTML += `<td class="slash"><input class="input" id="scoredA${numActivities}">/<br><input class="input" id="totalA${numActivities}"></td>`;
    tableRow.innerHTML += `<td id="percent${numActivities}"></td>`;
    table.appendChild(tableRow);

    let score = document.getElementById(`scoredA${numActivities}`);
    let total = document.getElementById(`totalA${numActivities}`);

    score.addEventListener("input", function(){
        let percent = document.getElementById(`percent${currentIteration}`);
        let grade = (parseFloat(score.value)/parseFloat(total.value)*100).toFixed(2);
        if (score.value == "" && total.value =="" ){
            percent.innerHTML = "";
        }
        else{
            percent.innerHTML = `${grade}`;
        }
    });
    
    total.addEventListener("input", function(){
        let percent = document.getElementById(`percent${currentIteration}`);
        let grade = (parseFloat(score.value)/parseFloat(total.value)*100).toFixed(2);
        if (score.value == "" && total.value =="" ){
            percent.innerHTML = "";
        }
        else{
            percent.innerHTML = `${grade}`;
        }
        
    });

    let objDiv = document.getElementById("scrollWrap");
    objDiv.scrollTop = objDiv.scrollHeight;
});





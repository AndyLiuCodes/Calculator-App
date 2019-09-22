let a1Weight = document.getElementById("weightA1");
let a1Score = document.getElementById("scoredA1");
let a1Total = document.getElementById("totalA1");

let a2Weight = document.getElementById("weightA2");
let a2Score = document.getElementById("scoredA2");
let a2Total = document.getElementById("totalA2");

let a3Weight = document.getElementById("weightA3");
let a3Score = document.getElementById("scoredA3");
let a3Total = document.getElementById("totalA3");

let a4Weight = document.getElementById("weightA4");
let a4Score = document.getElementById("scoredA4");
let a4Total = document.getElementById("totalA4");

let meanCalc = document.getElementById("mean");
let weightCalc = document.getElementById("weighted");
let newRow = document.getElementById("rowAdd");

let numActivities = 4;

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


a1Score.addEventListener("input", function(){
    let percent = document.getElementById("percent1");
    percent.innerHTML = `${(parseFloat(a1Score.value)/parseFloat(a1Total.value)*100).toFixed(2)}%`;
});

a1Total.addEventListener("input", function(){
    let percent = document.getElementById("percent1");
    percent.innerHTML = `${(parseFloat(a1Score.value)/parseFloat(a1Total.value)*100).toFixed(2)}%`;
});

a2Score.addEventListener("input", function(){
    let percent = document.getElementById("percent2");
    percent.innerHTML = `${(parseFloat(a2Score.value)/parseFloat(a2Total.value)*100).toFixed(2)}%`;
});

a2Total.addEventListener("input", function(){
    let percent = document.getElementById("percent2");
    percent.innerHTML = `${(parseFloat(a2Score.value)/parseFloat(a2Total.value)*100).toFixed(2)}%`;
});

a3Score.addEventListener("input", function(){
    let percent = document.getElementById("percent3");
    percent.innerHTML = `${(parseFloat(a3Score.value)/parseFloat(a3Total.value)*100).toFixed(2)}%`;
});

a3Total.addEventListener("input", function(){
    let percent = document.getElementById("percent3");
    percent.innerHTML = `${(parseFloat(a3Score.value)/parseFloat(a3Total.value)*100).toFixed(2)}%`;
});

a4Score.addEventListener("input", function(){
    let percent = document.getElementById("percent4");
    percent.innerHTML = `${(parseFloat(a4Score.value)/parseFloat(a4Total.value)*100).toFixed(2)}%`;
});

a4Total.addEventListener("input", function(){
    let percent = document.getElementById("percent4");
    percent.innerHTML = `${(parseFloat(a4Score.value)/parseFloat(a4Total.value)*100).toFixed(2)}%`;
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





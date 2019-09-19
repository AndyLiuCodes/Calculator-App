var a1Weight = document.getElementById("weightA1");
var a1Score = document.getElementById("scoredA1");
var a1Total = document.getElementById("totalA1");

var a2Weight = document.getElementById("weightA2");
var a2Score = document.getElementById("scoredA2");
var a2Total = document.getElementById("totalA2");

var a3Weight = document.getElementById("weightA3");
var a3Score = document.getElementById("scoredA3");
var a3Total = document.getElementById("totalA3");

var a4Weight = document.getElementById("weightA4");
var a4Score = document.getElementById("scoredA4");
var a4Total = document.getElementById("totalA4");

var meanCalc = document.getElementById("mean");
var weightCalc = document.getElementById("weighted");

var numActivities = 4;

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

    document.getElementById("result").innerHTML = `Your mean grade is: ${percentageAvg}/100`;
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
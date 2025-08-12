// functions for button events

function convertTemp() {
    var tempCelsius = document.getElementById("celsius").value;
    if(tempCelsius != ""){
        var convertedTemp = (tempCelsius * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = convertedTemp;
    }else{
        alert("Please, enter a number of temperature in celsius");
    }
}

function convertWeight() {
    var k = document.getElementById("kilograms").value;
    if(k != ""){
        var p = k * 2.2;
        document.getElementById("pounds").value = p;
    }else{
        alert("Please, enter a number of weight in kilograms");
    }
}

function convertDistance() {
    var kms = document.getElementById("kilometers").value;
    if(kms != ""){
        var m = kms * 0.62137;
        document.getElementById("miles").value = m;
    }else{
        alert("Please, enter the number of distance in kilometers");
    }
}

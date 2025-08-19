function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");

    //convert 'no. of years' into the actual year in the future
    var year = new Date().getFullYear() + parseInt(years);  // ensures that the input taken as 'no of years' is converted to the actual year 

    // validate a positive number input
    if(principal <= 0){
        alert('Please, enter a positive number!');
        document.getElementById("principal").focus();   // .focus() takes the user back to the principal input box
    }else{   // used the <mark> element tag to highly the values
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\>at an interest rate of " + "<mark>" + rate + "%" + "</mark>" +"\<br\> You will recieve an amount of $" + "<mark>" + amount + "</mark>" + ", \<br\>in the year "+ "<mark>" + year + "</mark>" + "\<br\>";
    }

}

function updateRate() {
    let rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;    // changes the value of the innerText of what is inside the span
    
    
}

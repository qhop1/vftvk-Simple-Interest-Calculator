// calculate the interest given the user inputs
function compute()
{
    //get values from user input
    var principal = document.getElementById("principal").value;
    //check for positive number
    if  ((principal <= 0) || isNaN(principal) ) 
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else
    {

      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;

      var interest = principal * years * rate /100;

      var year = new Date().getFullYear()+parseInt(years);

      //build result message
      document.getElementById("result").innerHTML="If you deposit " + " <mark> " + principal + " </mark> " + " <br/>"
      + "at an interest rate of " + " <mark> " + rate + "%" + " </mark> " + " <br/>"
      + "You will receive an amount of " + " <mark> " + interest + " </mark> " + "," + " <br/>"
      + "in the year " + " <mark> " + year + " </mark> " + " <br/>";
    }
    
}

// output value of slider 
function updateRate() 
{
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText=rateval;
}

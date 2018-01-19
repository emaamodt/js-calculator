var input = [];
var total = 0;

var temp = "";
var operator = "";

$("button").on("click", function clickButton() {
  //Get the text on the button
  var val = $(this).text();
  //If the user presses a number or a decimal, add it to temp and display it on the screen
  if (!isNaN(val) || val === ".") {
    temp += val;
    $("#display").html(temp);
  };
 //If the button has an operator symbol on it, apply the corresponding mathematical operation
  if (val === "+" || val === "-" || val === "/" || val === "x") {
    //If there is no operator currently selected, add the number to the total
    if (operator === "") {
     total += Number(temp);
    };
    if (operator === "plus") {
      total += Number(temp);
    };
    if (operator === "minus") {
      total -= Number(temp);
    };
    if (operator === "divide") {
      total = total/Number(temp);
    }
    if (operator === "multiply") {
      total = total*Number(temp);
    };
    
    temp = "";
    
    //Display the total
    $("#display").html(total);
    
    //Set operator to whatever the symbol is so the calculator knows to which operation to perform on the number that follows
      operator = val
  };

  if (val === "%") {
    temp = temp*.01
    $("#display").html(temp);
  };

  if (val === "CE") {
    temp = "";
    $("#display").html("0");
  };

  if (val === "AC") {
    temp = "";
    total = 0;
    operator = "";
    $("#display").html("0");
  }

  if (val === "=") {
    if (operator === "+") {
      total += Number(temp);
    };
    if (operator === "-") {
      total -= Number(temp);
    };
    if (operator === "/") {
      total = total / Number(temp);
    };
    if (operator === "x") {
      total = total*Number(temp);
    };
    
    //Display the final total
    $("#display").html(total);
  };
});
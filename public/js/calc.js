$(document).ready(function() {
  //store input from user
  
  var inputs=[""];
  
  //store current value
  var finalEquation = "";
  
  //Array of operators for validation without the "."
  var operators1 = ["+", "-", "*", "/", "%"];

  
  //Operator for validation with the "."
  var operators2 = ["."];
  
  //Array of numbers
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  //get value from user input
  function getValue(input){
    console.log("inputVal " + input);
    if(operators2.includes(inputs[inputs.length-1] === true && input === ".")){
      console.log("ERROR!: Duplicate '.'");
    }
    else {
      // Prevent from starting with an Operator     
      if(inputs.length === 1 && operators1.includes(input)===false){
        inputs.push(input);
      }
      // If the last character input was an operator add operator to array
      else if(operators1.includes(inputs[inputs.length-1])===false){
        inputs.push(input);
      }
      else if(nums.includes(Number(input))){
        inputs.push(input);
      }
    }
    updateValue();
  }
  
  //update display value
  function updateValue(){
    finalEquation = inputs.join("");
    $("#display").html(finalEquation);
      
  }
  
  // get current total
  function getTotal(){
    // try and catch for incorrect user input errors
    try {
    finalEquation = inputs.join("");

    // Calculate Percentage by replacing % with /100 using REGEX so it can be evaluated
    if (finalEquation.includes('%') == true) {
      finalEquation = finalEquation.replace(/%/g, '/100');
      console.log("Calculated % " + finalEquation);
    } 

    // Replace all instances of x and ÷ with * and / respectively using REGEX 
    finalEquation = finalEquation.replace(/\x/g, '*').replace(/÷/g, '/');
      console.log("finalEquation "+eval(finalEquation));
    $("#display").html(eval(finalEquation)); //return calculated result and display value
    }
    catch(err) {
        alert("ERROR: incorrect input " + err + " Please check your calculation");
    } 
  }
  
  $("a").on("click", function(){
    if(this.id ==="clearAll"){
      inputs=[""];
      updateValue()
    }
    else if(this.id === "clear"){
      inputs.pop();
      updateValue();
    }
    else if(this.id === "equals"){
      getTotal();
    }
    else{
      if(inputs[inputs.length -1].indexOf("+", "-", "*", "/", "%") === -1){
          getValue(this.id);
         }
       else {
          getValue(this.id);
         }
    }
  }); 
});


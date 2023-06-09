document.getElementById("squre").addEventListener("click", function() {
    var number= document.getElementById("Input-number").value;
    var numbers = number.split(",");
  
    if(number==""){
        alert("Enter valid number");
        return false;
   }
   else{
    var squared = numbers.map(function(number) {
      var inputNumber = parseFloat(number);
      return inputNumber * inputNumber;
    });
  
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Squared Numbers: " + squared.join(", ");
    document.getElementById("result").classList.remove("hidden");
 }});
  document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("Input-number").value = "";
    document.getElementById("result").classList.add("hidden");

});

  
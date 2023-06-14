document.getElementById("click").addEventListener("click", function() {
    var number = document.getElementById("inputNumber").value;
    var result = document.getElementById("result");
  
    result.innerHTML = ""; 
    if(number<="1"){
      alert("Enter valid number");
    }
  for (var i = 2; i <= number; i += 2) {
      var listItem = document.createElement("li");
      listItem.textContent = i;
      result.appendChild(listItem);
    document.getElementById("result").classList.remove("hidden");
}
  });
  document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("inputNumber").value = "";
    document.getElementById("result").classList.add("hidden");

});
function sumOfDigits()
{
  var n, remainder, sum=0;
  n =document.getElementById("number").value;
    if(n<="0"){
        alert("Enter valid number");
      }
    else{
        while(n)
        {
          remainder = n % 10;
          sum = sum + remainder;
          n = Math.floor(n/10);
        }
        var resultElement=document.getElementById("sum");
        resultElement.textContent="sum: " + sum;
       document.getElementById("sum").classList.remove("hidden");

      }  
}
    document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("number").value = "";
    document.getElementById("sum").classList.add("hidden");

});
function verify(){
    var no;
    const name=document.getElementById('name1').value;
    const age=document.getElementById('age').value;
    no=Number(document.getElementById("age").value);
   if(name===""){
        alert("Enter your name");
        return false;
    }
   else if(age<="0"){
        alert("Enter valid input");
        return false;
    }
   else if(no>=18){
        document.getElementById("demo").innerHTML = "Eligible";
        document.getElementById("demo").className="correct";
        document.getElementById("demo").classList.remove("hidden");
     }
    else{
        document.getElementById("demo").innerHTML = "Not Eligible";
        document.getElementById("demo").className="correct2";
    }

}   document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("name1").value = "";
    document.getElementById("age").value = "";
    document.getElementById("demo").classList.add("hidden");

 });
  
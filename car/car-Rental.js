const dropdown = document.getElementById("car-list");
const section = document.getElementById("contact");
const list = document.querySelector(".list-service");


fetch("car.json")
  .then(response => response.json())
  .then(data => {
    
    data.carList.forEach(({ carId, carBrand}) => {
      const option = document.createElement("option");
      option.value = carId;
      option.textContent = carBrand;
      dropdown.appendChild(option);
    });
    

    let car = ''; 

    data.carList.forEach(({carId,carBrand,carRent,carAvailable,numberofSites})=>{
      car += `
      <div class="car-container">
        <div class="img-container">
          <img class=imgg src="${carRent.image.url}">
        </div>
        <h1 class="brand">${carBrand}</h1>
        <div class="car-detail">
        <p class="fuel">Fuel: ${carRent.fuel}</p>
        <h3 class="available">CarAvailable: ${carAvailable}</h3></div>
        <div class="price">
        <h2>NumbarofSites: ${numberofSites}</h2>
        <h2>Price: ${carRent.rentalPrice}
        <span>/month</span></div>
        </h2>
        <button onclick="cheak();" class="rent">Rent Now</button>
      </div>`;

    });

    list.innerHTML=car;

    
    console.log(data);

  })

  function cheak(){
    window.location.href="#home";
  }


const form=document.getElementById("feedback");
const username=document.getElementById("username"); 
const phone=document.getElementById("phone"); 
const email=document.getElementById("email"); 
const text=document.getElementById("text2"); 

  function verify(){
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const textValue = text.value.trim();
    
  if(usernameValue==="") {
      setError(username,'Username Cannot Be Blank');
  } else{
      setSuccess(username);
  }
  if(phoneValue === "") {
    setError(phone,'Email Cannot Be Blank');
  } else{
    setSuccess(phone);
  }
  if(emailValue === "") {
  setError(email,'Email Cannot Be Blank');
  } else if(!isEmail(emailValue)) {
  setError(email,'Not a valid Email')
  } else {
  setSuccess(email);
  }
  if(textValue==='') {
  setError(text,'Username Cannot Be Blank');
  } else {
  setSuccess(text);
  alert("Thank You For Your Feedback");
}

document.usernameValue.value ==="";

  function setError(input,Message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = Message;
  }

  function setSuccess(input,Message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control success';
  }
}

function isEmail(email) {
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email);
}


function book() {
  const dropdown = document.getElementById("car-list").value;
  const location = document.querySelector("#location").value;
  const pickup = document.querySelector("#pickup").value;
  const pickupTime = document.querySelector("#pickupt").value;
  const drop = document.querySelector("#return").value;
  const dt = document.querySelector("#returnt").value;

  if(dropdown === "Select car type") {
    alert("select car type");
  } else if(location === "" || pickup === "" || pickupTime === "" || drop === "" || dt === "") {
    alert("All fields required");
    return false;
  } else {
    true;
    window.location = "car-booking.html";
  }

  document.querySelector("#location").value="";
  document.querySelector("#pickup").value="";
  document.querySelector("#pickupt").value="";
  document.querySelector("#return").value="";
  document.querySelector("#returnt").value="";
}
const form=document.getElementById("feedback");
const username=document.getElementById("username"); 
const phone=document.getElementById("phone"); 
const email=document.getElementById("email"); 
const text=document.getElementById("text2"); 

form.addEventListener('submit',e =>{
    e.preventDefault();
    verify();
});

  function verify(){
    const usernameValue = username.value;
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const textValue = text.value.trim();
    
  if(usernameValue==='') {
      setError(username,'Username Cannot Be Blank');
  } else{
      setSuccess(username);
  }
  if(phoneValue === '') {
    setError(phone,'Email Cannot Be Blank');
  } else{
    setSuccess(phone);
  }
  if(emailValue === '') {
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
  username.value = '';
  phone.value = '';
  email.value = '';
  text.value = '';
  }
  
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
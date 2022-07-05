const submitBtn = document.getElementById("submit-info");
const userName = document.querySelector(".first-name");
const nameLabel = document.querySelector(".name-label");
const nameError = document.querySelector(".first-name-error");
const userLastName = document.querySelector(".last-name");
const lastNameLabel = document.querySelector(".lastname-label");
const lastNameError = document.querySelector(".last-name-error");
const userEmail = document.querySelector(".user-email");
const emailLabel = document.querySelector(".email-label");
const emailError = document.querySelector(".user-email-error");
const userPass = document.querySelector(".user-pass");
const passLabel = document.querySelector(".pass-label");
const passError = document.querySelector(".user-pass-error");
const successMsg = document.querySelector(".success-msg");
const formElement=document.querySelector(".main-form"); 



formElement.addEventListener("submit",handleSubmit)
function handleSubmit (e){
  e.preventDefault();
  const firstName=userName.value;
  const lastName=userLastName.value;
  const email=userEmail.value;
  const password=userPass.value;
  alert("Thanks for applying "+firstName+ ", the details would be sent your email address at :"+email+" shortly");
}


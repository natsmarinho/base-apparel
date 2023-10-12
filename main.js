const email = document.querySelector("#in-email");
const btnRequest = document.querySelector("#btn-request").addEventListener("click", requested);
const msgError = document.querySelector(".error-msg");
const emailValidate = document.querySelector(".valid-msg");
const errorIcon = document.querySelector(".img-error");
const regexEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

function setError() {
   msgError.style.display = "block";
   email.style.border = "2px solid red";
   errorIcon.style.display = "inline-block";
}

function removeError() {
    msgError.style.display = "none";
    email.style.border = "px solid #CE9898";
    errorIcon.style.display = "none";
}

function emailValido() {
    if(regexEmail.test(email.value)) {
        removeError();
        email.value = "";
        emailValidate.style.display = "block";
    } else {
        setError();
        emailValidate.style.display = "none";
    }
}

function requested() {
    emailValido();
}
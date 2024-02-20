const PW = document.querySelector("#password");
const CONFIRM_PW = document.querySelector("#confirm-pw")
const bothIcons = document.querySelectorAll(".material-symbols-outlined");
const PW_INPUTS = document.querySelectorAll(".pass")
const FORM = document.querySelector("#form");
const ERROR_SPAN = document.querySelectorAll(".error-msg");


const toggleEyeVisibility = (icon) => {
    let visible = "visibility";
    let notVisible = "visibility_off";

    if (icon.textContent == visible){
        icon.textContent = notVisible;
    } else {
        icon.textContent = visible;
    }

}

const togglePasswordVisibility = (input) => {

    if ( input === "password"){
        
        if(PW.type === "password"){
            PW.type = "text";
        } else {
            PW.type = "password";
        }

    } else {

        if (CONFIRM_PW.type === "password"){
            CONFIRM_PW.type = "text";
        } else {
            CONFIRM_PW.type = "password";
        }
    }
}

bothIcons.forEach(icon => icon.addEventListener("click", (e) => {
    const labelAttribute = e.target.parentElement.parentElement.getAttribute("for");
    togglePasswordVisibility(labelAttribute)
    toggleEyeVisibility(e.target)
}))


let password = [];
let confirmPassword = [];

const getPasswordValues = (input) => {
    if (input.target.getAttribute("id") == "password"){
        if (password.length > 0){
            password.pop()
            password.push(input.target.value)
        } else {
            password.push(input.target.value)
        }
    } else {
        if (confirmPassword.length > 0) {
            confirmPassword.pop();
            confirmPassword.push(input.target.value)
        } else {
            confirmPassword.push(input.target.value)
        }
    }
} 

PW_INPUTS.forEach(input => input.addEventListener("input", (e) => {
   getPasswordValues(e);
   ERROR_SPAN.forEach(span => span.classList.remove("error"))
}))

FORM.addEventListener("submit", (e) => {
    if (PW.value !== CONFIRM_PW.value){
        ERROR_SPAN.forEach(span => span.classList.add("error"))
        e.preventDefault()
    }
})
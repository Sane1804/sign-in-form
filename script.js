const PW = document.querySelector("#password");
const CONFIRM_PW = document.querySelector("#confirm-pw")
const bothIcons = document.querySelectorAll(".material-symbols-outlined");

console.log(bothIcons)

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



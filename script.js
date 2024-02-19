const PW_ICON = document.querySelector("#password-icon");
const CONFIRM_PW_ICON = document.querySelector("#confirm-password-icon")
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

bothIcons.forEach(icon => icon.addEventListener("click", (e) => {
    toggleEyeVisibility(e.target)
}))



const themeSwitch = document.querySelector(".theme-switch")
const section = document.querySelector("section")

themeSwitch.addEventListener("click", () => {
    section.style.transition = 'all 1s ease';
    section.classList.toggle("darkMode");
}); 


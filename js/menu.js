

//burger-con
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const logoContainerM = document.getElementById('logo-container-M');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    logoContainerM.classList.toggle("hidden"); // Toggle hidden class
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    logoContainerM.classList.add("hidden"); // Toggle hidden class
}))


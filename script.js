const hamburger = document.getElementById("hamburger")
const menuMobile = document.getElementById("menuMobile")

hamburger.addEventListener("click", ()=>{
    menuMobile.classList.toggle("show")
})
const menu = document.querySelector(".burder-menu");
const menu2 = document.querySelector(".exit");
menu.addEventListener("click", function() {
    const menuNav = document.querySelector(".nav-menu");
    menuNav.classList.toggle("_active");
    document.body.classList.toggle("lock");
})
menu2.addEventListener("click", function() {
    const menuNav = document.querySelector(".nav-menu");
    menuNav.classList.toggle("_active");
    document.body.classList.toggle("lock");
})
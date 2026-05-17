let menuicon = document.querySelector("#menu-icon");
let nav = document.querySelector("nav");

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x')
    nav.classList.toggle('active');
}
"use strict"

let btnMenu = document.querySelector("#btn-sidebar-menu");
let btnCloseMenu = document.querySelector("#btn-close-menu");
let btnDialogInfo = document.querySelector("#i-info-card");

btnMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
btnDialogInfo.addEventListener("click", openDialog);

function openMenu() {
    document.querySelector("#sidebar-menu").style.width = "400px";
}

function closeMenu() {
    document.querySelector("#sidebar-menu").style.width = "0";
    document.querySelector("contenido-menu").style.marginLeft = "0";
    document.querySelector("#btn-close-menu").style.display = "none";
}

function openDialog() {
    document.querySelector("#dialogo-info-juego").style.width = "400px"
}

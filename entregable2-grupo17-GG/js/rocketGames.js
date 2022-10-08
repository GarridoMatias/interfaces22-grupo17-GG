"use strict"

let btnMenu = document.querySelector("#btn-sidebar-menu");
let btnCloseMenu = document.querySelector("#btn-close-menu");
let btnDialogInfo = document.querySelector("#i-info-card");
let btnCloseDialog = document.querySelector("#btn-close-dialogo");
let iconCompartir = document.querySelector("#icon-compartir");
let slideControlNext = document.querySelector("#slide-control-prev");


btnMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
btnDialogInfo.addEventListener("click", openDialog);
btnCloseDialog.addEventListener("click", closeDialog);
iconCompartir.addEventListener("click", compartir);
slideControlNext.addEventListener("click", slideNext);

function openMenu() {
    document.querySelector("#sidebar-menu").style.width = "400px";
}

function closeMenu() {
    document.querySelector("#sidebar-menu").style.width = "0";
    document.querySelector("#contenido-menu").style.marginLeft = "0";
    document.querySelector("#btn-close-menu").style.display = "none";
}

function openDialog() {
    document.querySelector("#dialogo-info-juego").style.width = "80%";
}

function closeDialog() {
    document.querySelector("#dialogo-nfo-juego").style.width = "0";
    document.querySelector("#btn-close-dialogo").style.display = "none";
}

function compartir() {

}

function slideNext() {
    slideControlNext.style.visibility = "hidden";
    document.querySelector("#container-cards").style.animate = "scrollRight: 84";
}

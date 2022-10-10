"use strict"

let btnMenu = document.querySelector("#btn-sidebar-menu");
let btnCloseMenu = document.querySelector("#btn-close-menu");
let btnDialogInfo = document.querySelector("#i-info-card");
let iconCompartir = document.querySelector("#icon-compartir");
let slideControlNext = document.querySelector("#slide-control-prev");


btnMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
iconCompartir.addEventListener("click", compartir);
slideControlNext.addEventListener("click", slideNext);

function openMenu() {
    document.querySelector("#sidebar-menu").style.width = "400px";
}

function closeMenu(e) {
    e.preventDefault(); // agregado para que no recargue la pagina al cerrar popap

    document.querySelector("#sidebar-menu").style.width = "0";
    document.querySelector("#contenido-menu").style.marginLeft = "0";
    document.querySelector("#btn-close-menu").style.display = "inherit";
}

function openDialog(juego) {
    document.querySelector(`#dialogo-info-juego-${juego}`).style.width = "80%";
}

function closeDialog(juego) {
    this.preventDefault(); // agregado para que no recargue la pagina al cerrar popap
    document.querySelector(`#dialogo-info-juego-${juego}`).style.width = "0";
    document.querySelector(".close-dialogo").style.display = "inherit";
}

function compartir() {

}

function slideNext() {
    slideControlNext.style.visibility = "hidden";
    document.querySelector("#container-cards").style.animate = "scrollRight: 84";
}

let btnPopap = document.querySelectorAll(".i-info-card");
btnPopap.forEach(b => b.addEventListener("click", function() {
    let juego = b.getAttribute("id").split("-")[3];
    openDialog(juego);
}));

let btnCloseDialog = document.querySelectorAll(".close-dialogo");
btnCloseDialog.forEach(b => b.addEventListener("click", function() {
    let juego = b.getAttribute("id").split("-")[3];
    closeDialog(juego);
    this.preventDefault();
}))
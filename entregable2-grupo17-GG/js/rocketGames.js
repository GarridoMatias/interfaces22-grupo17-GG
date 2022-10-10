"use strict"

let btnMenu = document.querySelector("#btn-sidebar-menu");
let btnCloseMenu = document.querySelector("#btn-close-menu");
let btnDialogInfo = document.querySelector("#i-info-card");
let btnCloseDialog = document.querySelector("#btn-close-dialogo");
let iconCompartir = document.querySelector("#icon-compartir");
let slideControlNext = document.querySelector("#slide-control-prev");

let carrusel = document.querySelector("#container-cards");

let btnDialogBlood = document.querySelector("#i-info-blood");
let btnDialogHarry = document.querySelector("#i-info-harry");
let btnDialogSackBoy = document.querySelector("#i-info-sackboy");
let btnDialogMario = document.querySelector("#i-info-mario");
let btnDialogPlants = document.querySelector("#i-info-plants");
let btnDialogGuys = document.querySelector("#i-info-guys");
let btnDialogGot = document.querySelector("#i-info-got");
let btnDialogGow = document.querySelector("#i-info-gow");

btnMenu.addEventListener("click", openMenu);
btnCloseMenu.addEventListener("click", closeMenu);
btnDialogInfo.addEventListener("click", openDialog);
btnCloseDialog.addEventListener("click", closeDialog);
iconCompartir.addEventListener("click", compartir);
slideControlNext.addEventListener("click", slideNext);

btnDialogBlood.addEventListener("click", function (e) {
    openDialog("BloodBorne", "comprado")
});

btnDialogHarry.addEventListener("click", function (e) {
    openDialog("Harry Potter y la Piedra Filosofal", "agregado")
});

btnDialogSackBoy.addEventListener("click", function (e) {
    openDialog("Sackboy: A Big Adventure", "Gratis")
});

btnDialogMario.addEventListener("click", function (e) {
    openDialog("Mario Kart", "Gratis")
});

btnDialogPlants.addEventListener("click", function (e) {
    openDialog("Plantas & Zombies 3", "Gratis")
});

btnDialogGuys.addEventListener("click", function (e) {
    openDialog("Stumble Guys", "Gratis")
});

btnDialogGot.addEventListener("click", function (e) {
    openDialog("A Game of Thrones", "Gratis")
});

btnDialogGow.addEventListener("click", function (e) {
    openDialog("God of War", 1500)
});


function openMenu() {
    document.querySelector("#sidebar-menu").style.width = "400px";
}

function closeMenu(e) {
    e.preventDefault(); // agregado para que no recargue la pagina al cerrar popap

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
"use strict"

let btnOpenDialog = document.querySelectorAll(".i-info-card");
let btnCloseDialog = document.querySelector("#btn-close-dialogo");


btnOpenDialog.forEach(b => b.addEventListener("click", function() {
    let juego = b.getAttribute("id").split("-")[3];
    openDialog(juegos[juego]);
}));
btnCloseDialog.addEventListener("click", closeDialog);

function openDialog(juego) {
    document.querySelector("#dialogo-info-juego").style.width = "80%";
    document.querySelector("#id-titulo-dialogo").innerHTML = juego.titulo;
    document.querySelector("#id-img-dialogo").src = `${juego.img}`;
    document.querySelector("#id-precio-dialogo").innerHTML = juego.precio;
    document.querySelector("#id-descripcion-dialogo").innerHTML = juego.descripcion;
}

function closeDialog() {
    document.querySelector("#dialogo-info-juego").style.width = "0";
}
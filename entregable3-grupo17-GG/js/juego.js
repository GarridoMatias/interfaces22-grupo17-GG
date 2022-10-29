"use strict";

//IMAGEN DE FONDO DEL CANVAS
let imageFondo = new Image();
imageFondo.src = "./images/cargando.jpg";
imageFondo.onload = function() {
        ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height)
    }
    //DECLARO VARIABLES
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let widthWindow = window.innerWidth;
let porsentajeDelWidth = (widthWindow * 80) / 100;
canvas.width = porsentajeDelWidth;
let cuadrilla = []; //MATRIZ CONTENEDORA DE CASILLEROS
let filas = 4; //NUMERO DE FILAS STANDARD
let totalfichas = filas * filas;

//BOTON PARA CONFIGURAR EL CANVAS
let btnConfigurar = document.querySelector(".btn-configurar");
btnConfigurar.addEventListener("click", OpenDialogConfig);
//BOTON PARA CERRAR LA CONFIGURACION
let btnCloseDialogConfig = document.querySelector(".btn-close-dialogo");
btnCloseDialogConfig.addEventListener("click", closeDialogConfig);

//FUNCIONES PARA ABRIR Y CERRAR EL DIALOGO
function OpenDialogConfig() {
    console.log("entre");
    document.querySelector(".container-dialog-config").style.width = "80%";
}

function closeDialogConfig() {
    document.querySelector(".container-dialog-config").style.width = "0";
}
//BOTON PARA CONFIMAR CAMBIOS DEL CANVAS
let btnGuardar = document.querySelector(".btn-guardar");
//SE DISPARA EVENTO PARA REFACTORIZAR EL CANVAS
// btnGuardar.addEventListener("click", refactorizarCanvas);

// function refactorizarCanvas() {
// }

//INICIACION DEL TABLERO
let tablero = new Tablero(canvas, ctx, cuadrilla, filas);
tablero.inicializar();
tablero.dibujar();
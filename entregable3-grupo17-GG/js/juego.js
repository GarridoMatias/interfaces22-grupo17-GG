"use strict";

//DECLARO VARIABLES
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let widthWindow = window.innerWidth;
let porsentajeDelWidth = (widthWindow * 80) / 100;
canvas.width = porsentajeDelWidth;
let cuadrilla = []; //MATRIZ CONTENEDORA DE CASILLEROS
let pilaFichasJ1 = [];
let pilaFichasJ2 = [];
let filas = 4; //NUMERO DE FILAS STANDARD
let imagenCasilla = "./images/piezaTablero.png"; //incia por defecto
let imagenFichaJ1 = "./images/piezaTablero.png"; // inicia por defecto
let imagenFichaJ2 = "./images/piezaTablero.png"; // inicia por defecto
let totalfichas = filas * (filas + 1);
let tablero = new Tablero(canvas, ctx, cuadrilla, filas);
let jugador1 = new Jugador((totalfichas / 2), pilaFichasJ1, ctx, 0);
let jugador2 = new Jugador((totalfichas / 2), pilaFichasJ2, ctx, (canvas.width - 80));
//IMAGEN DE FONDO DEL CANVAS


inicializar();

function refactorizarCanvas(e) {
    e.preventDefault();
    let nFilas = document.querySelector("#inp-filas-selected");
    imagenCasilla = document.querySelector('input[name="inp-casillero"]:checked').value;
    filas = nFilas.value;
    //limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tablero.setFilas(filas);
    inicializar(imagenCasilla);
    closeDialogConfig();
}

function inicializar() {
    let imageFondo = new Image();
    imageFondo.src = "./images/cargando.jpg";
    imageFondo.onload = function () {
        ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);
        //INICIACION DEL TABLERO
        tablero.inicializar(imagenCasilla);
        tablero.dibujar();
        jugador1.inicializar(imagenFichaJ1);
        jugador2.inicializar(imagenFichaJ2);
        jugador1.dibujar();
        jugador2.dibujar();
    };
}

//FUNCIONES PARA ABRIR Y CERRAR EL DIALOGO de configuracion
function OpenDialogConfig() {

    document.querySelector(".container-dialog-config").style.width = "80%";
}

function closeDialogConfig() {
    document.querySelector(".container-dialog-config").style.width = "0";
}

//BOTON PARA CONFIGURAR EL CANVAS
let btnConfigurar = document.querySelector(".btn-configurar");
btnConfigurar.addEventListener("click", OpenDialogConfig);
//BOTON PARA CERRAR LA CONFIGURACION
let btnCloseDialogConfig = document.querySelector(".btn-close-dialogo");
btnCloseDialogConfig.addEventListener("click", closeDialogConfig);
//BOTON PARA CONFIMAR CAMBIOS DEL CANVAS
let btnGuardar = document.querySelector("#btn-guardar-configuracion");
btnGuardar.addEventListener("click", refactorizarCanvas);

// let selectFichas1 = document.querySelector("#select-ficha-j1");
// let selectFichas2 = document.querySelector("#select-ficha-j2");

// let fichas = [];

// fichas = [{
//         "nombre": "Ficha 1",
//         "src": "images/piezaTablero.png"
//     },
//     {
//         "nombre": "Ficha 2",
//         "src": "images/piezaTablero.png"
//     },
//     {
//         "nombre": "Ficha 3",
//         "src": "images/piezaTablero.png"
//     },
//     {
//         "nombre": "Ficha 4",
//         "src": "images/piezaTablero.png"
//     },

// ];
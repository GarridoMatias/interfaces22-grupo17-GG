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
let imagenFichaJ2 = "./images/piezaTablero2.png"; // inicia por defecto
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
    imagenFichaJ1 = document.querySelector('input[name="inp-ficha-j1"]:checked').value;
    imagenFichaJ2 = document.querySelector('input[name="inp-ficha-j2"]:checked').value;
    filas = nFilas.value;
    //limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tablero.setFilas(filas);
    inicializar(imagenCasilla);
    jugador1.inicializar(imagenFichaJ1);
    jugador2.inicializar(imagenFichaJ2);
    closeDialogConfig();
}

function actualizar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tablero.setFilas(filas);
    inicializar(imagenCasilla);
    jugador1.inicializar(imagenFichaJ1);
    jugador2.inicializar(imagenFichaJ2);
}

function inicializar() {
    let imageFondo = new Image();
    imageFondo.src = "./images/cargando.jpg";
    imageFondo.onload = function() {
        ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);
        //INICIACION DEL TABLERO
        tablero.inicializar(imagenCasilla);
        tablero.dibujar();
        jugador1.inicializar(imagenFichaJ1);
        jugador2.inicializar(imagenFichaJ2);
        jugador1.dibujar();
        jugador2.dibujar();
        inicializarEventos();
    };
}

//FUNCIONES PARA ABRIR Y CERRAR EL DIALOGO de configuracion
function OpenDialogConfig() {
    document.querySelector(".container-dialog-config").style.width = "80%";

    let nuevaSeleccionadaJ1 = document.querySelectorAll(".class-inp-ficha-j1");
    nuevaSeleccionadaJ1.forEach(b => b.addEventListener("click", function() {

        let seleccionado = b.getAttribute("id").split("-");
        seleccionado[2] = "j2";
        let nuevoid = seleccionado.join("-");

        if (document.querySelector(`#${nuevoid}`).checked) {
            document.querySelector(`#${nuevoidOtro}`).checked = true;
        }
        console.log(document.querySelector(`#${nuevoid}`));
        console.log(document.querySelector(`#${nuevoidOtro}`));
        //controlar para que no sean iguales

    }));
    // let fichaSelectJ2 = document.querySelector('input[name="inp-ficha-j2"]:checked').getAttribute("id");

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



function inicializarEventos(params) {
    canvas.onmousedown = mouseDown;
    canvas.onmouseup = mouseUp;
    canvas.onmousemove = mouseMove;
}

//Verifica qué ficha fue seleccionada cuando el botón del mouse es presionado
function mouseDown() {
    pilaFichasJ1.forEach(f => f.verificarSelect(event, canvas.offsetLeft, canvas.offsetTop));
    pilaFichasJ2.forEach(f => f.verificarSelect(event, canvas.offsetLeft, canvas.offsetTop));
}

//Verifica si la ficha puede colocarse a partir del lugar donde el botón del mouse es soltado 
function mouseUp(params) {
    pilaFichasJ1.forEach(f => tablero.verificarColocable(f));
    pilaFichasJ2.forEach(f => tablero.verificarColocable(f));
}

//Mueve la ficha siguiendo la trayectoria del mouse
function mouseMove(params) {
    if (inicializarEventos) {
        let x = event.pageX - canvas.offsetLeft;
        let y = event.pageY - canvas.offsetTop;
        pilaFichasJ1.forEach(f => f.actualizarPos(x, y));
        pilaFichasJ2.forEach(f => f.actualizarPos(x, y));
        actualizar();
    }
}

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
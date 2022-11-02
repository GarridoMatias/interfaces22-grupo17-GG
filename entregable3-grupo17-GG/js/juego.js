"use strict";
//IMAGEN DE FONDO DEL CANVAS

let imageFondo = new Image();
imageFondo.src = "./images/fondo-juego.png";
imageFondo.onload = function() {
    ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);
}

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
let imagenFichaJ1 = "./images/ficha1.png"; // inicia por defecto
let imagenFichaJ2 = "./images/ficha2.png"; // inicia por defecto
let totalfichas = filas * (filas + 1);
let tablero = new Tablero(canvas, ctx, cuadrilla, filas);
let jugador1 = new Jugador(pilaFichasJ1, ctx, 20, canvas.height, filas);
let jugador2 = new Jugador(pilaFichasJ2, ctx, (canvas.width - 180), canvas.height, filas);

iniciar();
inicializarEventos();


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
    jugador1.setFilas(filas);
    jugador2.setFilas(filas);

    tablero.inicializar(imagenCasilla);
    jugador1.inicializar(imagenFichaJ1);
    jugador2.inicializar(imagenFichaJ2);

    tablero.dibujar(0, ctx);
    jugador1.dibujar(0, ctx);
    jugador2.dibujar(0, ctx);

    closeDialogConfig();
}

function actualizar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);
    tablero.dibujar(1, ctx);
    jugador1.dibujar(1, ctx);
    jugador2.dibujar(1, ctx);
}

function iniciar() {
    ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);
    //INICIACION DEL TABLERO
    tablero.inicializar(imagenCasilla);
    jugador1.inicializar(imagenFichaJ1);
    jugador2.inicializar(imagenFichaJ2);
    tablero.dibujar(0, ctx);
    jugador1.dibujar(0, ctx);
    jugador2.dibujar(0, ctx);

}

//FUNCIONES PARA ABRIR Y CERRAR EL DIALOGO de configuracion
function OpenDialogConfig() {
    document.querySelector(".container-dialog-config").style.width = "80%";
    let nFilas = document.querySelector("#inp-filas-selected");
    let selectJ1 = document.querySelector('input[name="inp-ficha-j1"]:checked').getAttribute("id");
    let selectJ2 = document.querySelector('input[name="inp-ficha-j2"]:checked').getAttribute("id");
    console.log(selectJ1);
    console.log(selectJ2);

    document.querySelector("#value-filas-selected").innerHTML = nFilas.value + ' en linea';

    let nuevaSeleccionadaJ1 = document.querySelectorAll(".class-inp-ficha");
    nuevaSeleccionadaJ1.forEach(b => b.addEventListener("click", function() {
        let paraCambiar;
        let seleccionado = b.getAttribute("id").split("-");
        console.log(seleccionado);
        console.log(selectJ1);
        console.log(selectJ2);
        if (seleccionado[2] == "j1") {
            seleccionado[2] = "j2";
            paraCambiar = selectJ1.split("-");
            paraCambiar[2] = "j2";
            paraCambiar = paraCambiar.join("-");


        } else if (seleccionado[2] == "j2") {
            seleccionado[2] = "j1";
            paraCambiar = selectJ2.split("-");
            paraCambiar[2] = "j1";
            paraCambiar = paraCambiar.join("-");
        }
        let seleccionContraria = seleccionado.join("-");
        if (document.querySelector(`#${seleccionContraria}`).checked) {
            document.querySelector(`#${seleccionContraria}`).checked = false;
            document.querySelector(`#${paraCambiar}`).checked = true;
        }
        //controlar para que no sean iguales

    }));

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

    pilaFichasJ1.forEach(f => tablero.verificarCasillero(f, event, canvas.offsetLeft));
    pilaFichasJ2.forEach(f => tablero.verificarCasillero(f, event, canvas.offsetLeft));

}

//Mueve la ficha siguiendo la trayectoria del mouse
function mouseMove(params) {
    if (pilaFichasJ1) {
        let x = event.clientX - canvas.offsetLeft;
        let y = event.clientY - canvas.offsetTop;
        pilaFichasJ1.forEach(f => f.actualizarPos(x, y));
        pilaFichasJ2.forEach(f => f.actualizarPos(x, y));
        actualizar();

    }
}
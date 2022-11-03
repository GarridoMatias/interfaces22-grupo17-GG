"use strict";
//IMAGEN DE FONDO DEL CANVAS

let imageFondo = new Image();
imageFondo.src = "./images/fondo-juego.png";
imageFondo.onload = function () {
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
let tiempo = 30;
let intervalo;
let j1 = "Jugador 1";
let j2 = "Jugador 2";
let jugador1 = new Jugador(pilaFichasJ1, ctx, 0, canvas.height, filas, j1);
let jugador2 = new Jugador(pilaFichasJ2, ctx, (canvas.width - 160), canvas.height, filas, j2);
let ganador;

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

    tiempo = 30;
    ganador="";
    if(intervalo){
       clearInterval(intervalo);
    }
    intervalo = setInterval(DisminuirTiempo,1000);
}

function decrementarTiempo(){
    if(tiempo>0){
        tiempo--;
        actualizar();
     }
}

function mostrarTiempo(){
    if(tiempo>0){
        let minutes = Math.floor(tiempo/60);
        let segundos = tiempo % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        ctx.font = "3rem Arial";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${minutes} : ${segundos}`, 570, 50); 
     }else{
        finDePartida();
     }
}

function finDePartida(){   
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
     if(ganador){
        ctx.fillText(`¡Gano ${ganador} !`,750,60);
     }else{
        ctx.fillText("Juego empatado",750,60);        
     }
    //  jugadorDeTurno="";
}

function actualizar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);
    tablero.dibujar(1, ctx);
    jugador1.dibujar(1, ctx);
    jugador2.dibujar(1, ctx);
    mostrarTiempo();
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
    tiempo = 30;
    ganador="";
    if(intervalo){
       clearInterval(intervalo);
    }
    intervalo = setInterval(decrementarTiempo,1000);

}

//FUNCIONES PARA ABRIR Y CERRAR EL DIALOGO de configuracion
function OpenDialogConfig() {
    document.querySelector(".container-dialog-config").style.width = "80%";
    let nFilas = document.querySelector("#inp-filas-selected");
    //se guardan variables con las selecciones previas a cambiar
    let selectJ1 = document.querySelector('input[name="inp-ficha-j1"]:checked').getAttribute("id");
    let selectJ2 = document.querySelector('input[name="inp-ficha-j2"]:checked').getAttribute("id");

    document.querySelector("#value-filas-selected").innerHTML = nFilas.value + ' en linea';

    let nuevaSeleccionadaJ1 = document.querySelectorAll(".class-inp-ficha");
    nuevaSeleccionadaJ1.forEach(b => b.addEventListener("click", function () {

        let paraCambiar;
        let seleccionado = b.getAttribute("id").split("-");

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
    let rect = canvas.getBoundingClientRect();
    pilaFichasJ1.forEach(f => f.verificarSelect(event, rect.left, rect.top));
    pilaFichasJ2.forEach(f => f.verificarSelect(event, rect.left, rect.top));
}

//Verifica si la ficha puede colocarse a partir del lugar donde el botón del mouse es soltado 
function mouseUp(params) {

    pilaFichasJ1.forEach(f => tablero.verificarCasillero(f, event, canvas.offsetLeft));
    pilaFichasJ2.forEach(f => tablero.verificarCasillero(f, event, canvas.offsetLeft));

}

//Mueve la ficha siguiendo la trayectoria del mouse
function mouseMove(params) {
    if (pilaFichasJ1) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        pilaFichasJ1.forEach(f => f.actualizarPos(x, y));
        pilaFichasJ2.forEach(f => f.actualizarPos(x, y));
        actualizar();

    }
}
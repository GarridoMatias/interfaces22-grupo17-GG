"use strict"

let btnMenu = document.querySelector("#btn-sidebar-menu");
let btnCloseMenu = document.querySelector("#btn-close-menu");
let btnDialogInfo = document.querySelector("#i-info-card");
let btnCloseDialog = document.querySelector("#btn-close-dialogo");
let iconCompartir = document.querySelector("#icon-compartir");
let slideControlNext = document.querySelector("#slide-control-prev");

let carrusel = document.querySelector("#container-cards");

// let btnDialogBlood = document.querySelector("#i-info-blood");
// let btnDialogHarry = document.querySelector("#i-info-harry");
// let btnDialogSackBoy = document.querySelector("#i-info-sackboy");
// let btnDialogMario = document.querySelector("#i-info-mario");
// let btnDialogPlants = document.querySelector("#i-info-plants");
// let btnDialogGuys = document.querySelector("#i-info-guys");
// let btnDialogGot = document.querySelector("#i-info-got");
// let btnDialogGow = document.querySelector("#i-info-gow");

// btnMenu.addEventListener("click", openMenu);
// btnCloseMenu.addEventListener("click", closeMenu);
// btnDialogInfo.addEventListener("click", openDialog);
// btnCloseDialog.addEventListener("click", closeDialog);
// iconCompartir.addEventListener("click", compartir);
// slideControlNext.addEventListener("click", slideNext);

// btnDialogBlood.addEventListener("click", function(e) {
//     openDialog("BloodBorne", "comprado")
// });

// btnDialogHarry.addEventListener("click", function(e) {
//     openDialog("Harry Potter y la Piedra Filosofal", "agregado")
// });

// btnDialogSackBoy.addEventListener("click", function(e) {
//     openDialog("Sackboy: A Big Adventure", "Gratis")
// });

// btnDialogMario.addEventListener("click", function(e) {
//     openDialog("Mario Kart", "Gratis")
// });

// btnDialogPlants.addEventListener("click", function(e) {
//     openDialog("Plantas & Zombies 3", "Gratis")
// });

// btnDialogGuys.addEventListener("click", function(e) {
//     openDialog("Stumble Guys", "Gratis")
// });

// btnDialogGot.addEventListener("click", function(e) {
//     openDialog("A Game of Thrones", "Gratis")
// });

// btnDialogGow.addEventListener("click", function(e) {
//     openDialog("God of War", 1500)
// });


function openMenu() {
    document.querySelector("#sidebar-menu").style.width = "400px";
}

function closeMenu(e) {
    e.preventDefault(); // agregado para que no recargue la pagina al cerrar popap

    document.querySelector("#sidebar-menu").style.width = "0";
    document.querySelector("#contenido-menu").style.marginLeft = "0";
    document.querySelector("#btn-close-menu").style.display = "none";
}

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

function compartir() {

}

function slideNext() {
    slideControlNext.style.visibility = "hidden";
}

btnCloseDialog.addEventListener("click", closeDialog);

let btnDialogV2 = document.querySelectorAll(".i-info-card");
btnDialogV2.forEach(b => b.addEventListener("click", function() {
    let juego = b.getAttribute("id").split("-")[3];
    openDialog(juegos[juego]);
}));

let juegos = {
    bloodborne: {
        "titulo": "BloodBorne",
        "img": "./images/001juego-bloodborne.jpg",
        "descripcion": "Explora un mundo totalmente devastado, en el que solo pequeños grupos de personas han conseguido mantenerse con vida. Sobrevive como puedas en este juego apocalíptico.",
        "precio": "Ya compraste este juego",
        "estado": "Play"
    },
    harrypotter: {
        "titulo": "Harry Potter y la Piedra Filosofal",
        "img": "./images/002juego-harrypotter.jpg",
        "descripcion": "Podrás crear tu propio personaje y vivir de primera mano todo lo que significa estudiar en esta mágica escuela. Compartirás clases con los profesores más conocidos que trabajan allí.",
        "precio": "$1900",
        "estado": "Agregado al carrito"
    },
    sackboy: {
        "titulo": "Sackboy: A Big Adventure",
        "img": "./images/003juego-sackboy.jfif",
        "descripcion": "Una aventura a lo grande es en sus mecánicas. Saltar, golpear, esquivar y obetener objetos son las acciones básicas que nos van a acompañar durante toda la aventura.",
        "precio": "Gratis",
        "estado": "Play"
    },
    mariokart: {
        "titulo": "Mario Kart",
        "img": "./images/004juego-mariokart.jpg",
        "descripcion": "Recorre los niveles de este mundo retro y encuentra la súper hoja que te dará el poder de volar. Esquiva los obstáculos, recoge las monedas y frutas y defiéndete de los enemigos con las habilidades de Mario",
        "precio": "Gratis",
        "estado": "Play"
    },
    plantszombies3: {
        "titulo": "Plantas & Zombies 3",
        "img": "./images/005juego-plantszombies3.jpg",
        "descripcion": "Tiene como objetivo llevaros de vuelta al Patio, el lugar donde empezó todo. Tus personajes favoritos están ahí, con nuevos giros emocionantes que podrás descubrir",
        "precio": "Gratis",
        "estado": "Play"
    },
    stumbleguys: {
        "titulo": "Stumble Guys",
        "img": "./images/006juego-stumbleguys.jpg",
        "descripcion": "¡Siente la adrenalina a flor de piel mientras participas en asombrosas carreras de plataformas y obstáculos en el juego Stumble Guys Multiplayer Royale y luchas por ser el primero en cruzar la línea de meta sano y salvo! ",
        "precio": "$1100",
        "estado": "Agregar al carrito"
    },
    got: {
        "titulo": "A Game of Thrones",
        "img": "./images/007juego-got.jpg",
        "descripcion": "Un juego de estrategia: Crea el ejército más poderoso y ataca a tus vecinos para demostrar tu fuerza. Una simulación medieval: expande y cultiva tierras con un rico sistema de producción para construir tu reino. ",
        "precio": "Gratis",
        "estado": "Play"
    },

    godofwar: {
        "titulo": "God of War",
        "img": "./images/008juego-godofwar.jpg",
        "descripcion": "God of War mezcla luchas encarnizadas con pequeñas dosis de puzzles y plataforma. El personaje puede realizar un gran número de combos y poderes durante el transcurso del viaje, que irá aprendiendo avanzando el juego y mejorando sus cualidades.",
        "precio": "1500",
        "estado": "Agregar al carrito"
    },
    minecraft: {
        "titulo": "Minecraft",
        "img": "./images/009juego-bloodborne.jpg",
        "descripcion": "Es una combinación entre ir creando minas y picando en ellas para conseguir los elementos necesarios para mejorar tu equipo y posibilidades. El modo creativo es radicalmente diferente, si bien la base del juego sigue siendo la misma.",
        "precio": "Gratis",
        "estado": "Play"
    },
    escuadron: {
        "titulo": "Escuadron S6",
        "img": "./images/010juego-bloodborne.jpg",
        "descripcion": "Apex Legends se desarrolla en un universo envolvente en el que la historia evoluciona continuamente, los mapas cambian en cada temporada y nuevas leyendas se unen a la lucha.",
        "precio": "Gratis",
        "estado": "Play"
    }
}
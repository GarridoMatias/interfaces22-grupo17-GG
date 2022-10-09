"use strict"

let btnMenu = document.querySelector("#btn-sidebar-menu");
let btnCloseMenu = document.querySelector("#btn-close-menu");
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

function closeMenu() {
    document.querySelector("#sidebar-menu").style.width = "0";
    document.querySelector("#contenido-menu").style.marginLeft = "0";
    document.querySelector("#btn-close-menu").style.display = "none";
}

function openDialog(juego, valor) {
    let dialogo = document.querySelector("#dialogo-info-juego");
    let imagen = document.querySelector("#img-juego");
    let titulo = document.querySelector("#titulo-dialogo");
    let infoValor = document.querySelector("#info-valor-dialogo");
    let descripcion = document.querySelector("#descripcion-dialogo");
    let btnCarrito = document.querySelector("#btn-agregar-carrito");

    if (juego === "BloodBorne") {
        imagen.src = "./images/001juego-bloodborne.jpg";
        descripcion.innerHTML = "Explora un mundo totalmente devastado, en el que solo pequeños grupos de personas han conseguido mantenerse con vida. Sobrevive como puedas en este juego apocalíptico.";
    }
    if (juego === "Harry Potter y la Piedra Filosofal") {
        imagen.src = "./images/002juego-harrypotter.jpg";
        descripcion.innerHTML = "Podrás crear tu propio personaje y vivir de primera mano todo lo que significa estudiar en esta mágica escuela. Compartirás clases con los profesores más conocidos que trabajan allí.";
    }
    if (juego === "Sackboy: A Big Adventure") {
        imagen.src = "./images/003juego-sackboy.jfif";
        descripcion.innerHTML = "Una aventura a lo grande es en sus mecánicas. Saltar, golpear, esquivar y obetener objetos son las acciones básicas que nos van a acompañar durante toda la aventura.";
    }
    if (juego === "Mario Kart") {
        imagen.src = "./images/004juego-mariokart.jpg";
        descripcion.innerHTML = "Recorre los niveles de este mundo retro y encuentra la súper hoja que te dará el poder de volar. Esquiva los obstáculos, recoge las monedas y frutas y defiéndete de los enemigos con las habilidades de Mario.";
    }
    if (juego === "Plantas & Zombies 3") {
        imagen.src = "./images/005juego-plantszombies3.jpg";
        descripcion.innerHTML = "Tiene como objetivo llevaros de vuelta al Patio, el lugar donde empezó todo. Tus personajes favoritos están ahí, con nuevos giros emocionantes que podrás descubrir.";
    }
    if (juego === "Stumble Guys") {
        imagen.src = "./images/006juego-stumbleguys.jpg";
        descripcion.innerHTML = "¡Siente la adrenalina a flor de piel mientras participas en asombrosas carreras de plataformas y obstáculos en el juego Stumble Guys Multiplayer Royale y luchas por ser el primero en cruzar la línea de meta sano y salvo!";
    }
    if (juego === "A Game of Thrones") {
        imagen.src = "./images/007juego-got.jpg";
        descripcion.innerHTML = "A lo largo del juego, los jugadores expandirán su influencia a través de Poniente con una combinación de estrategias planificadas, dominio de la diplomacia y fuerzas militares.";
    }
    if (juego === "God of War") {
        imagen.src = "./images/008juego-godofwar.jpg";
        descripcion.innerHTML = "God of War mezcla luchas encarnizadas con pequeñas dosis de puzzles y plataforma. El personaje puede realizar un gran número de combos y poderes durante el transcurso del viaje, que irá aprendiendo avanzando el juego y mejorando sus cualidades.";
    }

    if (valor === "comprado") {
        infoValor.innerHTML = "Ya compraste este juego";
        btnCarrito.style.visibility = "visible";
    } else if (valor === "agregado") {
        infoValor.innerHTML = "Agregado al carrito";
        btnCarrito.style.visibility = "hidden";
    } else {
        infoValor.innerHTML = valor;
        btnCarrito.style.visibility = "visible";
    }

    titulo.innerHTML = juego;
    dialogo.style.width = "80%";
}

function closeDialog() {
    document.querySelector("#dialogo-info-juego").style.width = "0";
}

function compartir() {

}

function slideNext() {
    slideControlNext.style.visibility = "hidden";
}

"use strict"

const carr = 4; // cada cuantas card mueve el carrusel

let slideControlNext = document.querySelectorAll(".slide-control-next");
let slideControlPrev = document.querySelectorAll(".slide-control-prev");

slideControlNext.forEach(b => b.addEventListener("click", function() {
    let categoria = b.getAttribute("id").split("-")[2];
    slideNext(categoria);
}));
slideControlPrev.forEach(b => b.addEventListener("click", function() {
    let categoria = b.getAttribute("id").split("-")[2];
    slidePrev(categoria);
}));

//le paso por parametro a que carrusel corresponde para calcular los tamanios
//implementar luego
function slideNext(categoria) {
    let element = document.getElementById(`container-cards-${categoria}`);
    let elementStyle = window.getComputedStyle(element);
    let elementMarginActual = elementStyle.getPropertyValue('margin-left');
    let widthContenedor = elementStyle.getPropertyValue('width');

    // cantidad de cards
    let cantidadCards = document.querySelectorAll(`.card-juego-${categoria}`).length;

    let card = document.querySelector(`.card-juego-${categoria}`);
    let cardStyle = window.getComputedStyle(card);
    let cardWidth = cardStyle.getPropertyValue('width');
    let cardMargin = cardStyle.getPropertyValue('margin-left');

    // calcular tamanio que ocupa una card
    let tamanioCard = (parseInt(cardWidth) + parseInt(cardMargin) + parseInt(cardMargin));
    let tamanioNecesario = carr * tamanioCard;

    document.querySelector('.slide-control-prev').style.visibility = 'visible'
    document.querySelector('.slide-control-prev').style.display = 'block'

    let maximoWidth = parseInt(cantidadCards) * parseInt(tamanioCard);
    let margenActualValor = parseInt(elementMarginActual) * -1;
    let faltante = ((margenActualValor + parseInt(widthContenedor)) - maximoWidth) * -1;
    let marginAgregar = 0;
    if (faltante >= tamanioNecesario) {
        marginAgregar = parseInt(elementMarginActual) - parseInt(tamanioNecesario);
               
    } else {
        marginAgregar = parseInt(elementMarginActual) - parseInt(faltante);
        document.querySelector('.slide-control-next').style.visibility = 'hidden'
        document.querySelector('.slide-control-next').style.display = 'none'
    }
    document.querySelector(`#container-cards-${categoria}`).style.marginLeft = `${marginAgregar}px`;

}
//BOTON PREV FUNCIONANDO
function slidePrev(categoria) {
    let element = document.getElementById(`container-cards-${categoria}`);
    let elementStyle = window.getComputedStyle(element);
    let elementMarginActual = elementStyle.getPropertyValue('margin-left');
    document.querySelector('.slide-control-next').style.visibility = 'visible'
    document.querySelector('.slide-control-next').style.display = 'block'

    // selecciono todas las card
    let card = document.querySelector(`.card-juego-${categoria}`);
    let cardStyle = window.getComputedStyle(card);
    let cardWidth = cardStyle.getPropertyValue('width');
    let cardMargin = cardStyle.getPropertyValue('margin-left');

    // calcular tamanio que ocupa una card
    let tamanioCard = (parseInt(cardWidth) + parseInt(cardMargin) + parseInt(cardMargin));
    let tamanioNecesario = tamanioCard * carr;
    let margenActualValor = parseInt(elementMarginActual) * -1;
    if (parseInt(elementMarginActual) < 0 && margenActualValor > tamanioNecesario) {

        let marginQuitar = (parseInt(elementMarginActual) + tamanioNecesario);
        document.querySelector(`#container-cards-${categoria}`).style.marginLeft = `${marginQuitar}px`;

    } else {
        document.querySelector(`#container-cards-${categoria}`).style.marginLeft = "0px"
        document.querySelector('.slide-control-prev').style.visibility = 'hidden'
        document.querySelector('.slide-control-prev').style.display = 'none'
    }
}


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
        "precio": "$1500",
        "estado": "Agregar al carrito"
    },
    minecraft: {
        "titulo": "Minecraft",
        "img": "./images/009juego-minecraft.webp",
        "descripcion": "Es una combinación entre ir creando minas y picando en ellas para conseguir los elementos necesarios para mejorar tu equipo y posibilidades. El modo creativo es radicalmente diferente, si bien la base del juego sigue siendo la misma.",
        "precio": "Gratis",
        "estado": "Play"
    },
    escuadron: {
        "titulo": "Fortnite: Salvar el mundo",
        "img": "./images/010juego-escuadron.png",
        "descripcion": "Ofrece una batalla con armas de fuego que requiere práctica, habilidad, trabajo en equipo y reacciones rápidas. El desafío para los padres es mitigar los riesgos y maximizar los beneficios de Fortnite.",
        "precio": "Gratis",
        "estado": "Play"
    },
    wonderzoo: {
        "titulo": "Wonder Zoo",
        "img": "./images/010juego-wonderzoo.jpg",
        "descripcion": "¡Un infame cazador furtivo está amenazando a los animales en su hábitat natural! ¡Dirige un safari que los ponga a salvo y dales la bienvenida a tu maravilloso zoo!.",
        "precio": "Gratis",
        "estado": "Play"
    },
    amongus: {
        "titulo": "Among Us",
        "img": "./images/011juego-amongus.webp",
        "descripcion": "Los miembros de la tripulación pueden ganar completando todas las misiones o detectando y votando a los impostores en el barco. Los impostores pueden usar el sabotaje para provocar el caos, lo que facilita matar enemigos y obtener mejores excusas.",
        "precio": "$1300",
        "estado": "Play"
    }

}
"use strict"


let clickMenu = document.querySelector('.hamburger-menu');
let btnMenu = document.querySelector('.bar');

clickMenu.addEventListener("click", openMenu);

function openMenu() {

    let asd = btnMenu.classList.contains('animate');
    btnMenu.classList.toggle('animate');
    if (!asd) {
        document.querySelector("#sidebar-menu").style.display = "block";


    } else {
        document.querySelector("#sidebar-menu").style.display = "none";
        document.querySelector("#contenido-menu").style.marginLeft = "0";
    }
}

let parallax2 = document.querySelector(".parallax2");
let header = document.querySelector(".container-header");
let contenidoHeader = document.querySelectorAll(".c-header");
let textoHero
let fechaLanzamiento
let introduccion
let carrusel
let historia
let images
let textos
let personajes
let apodo
let nombre
let sinopsis
let roles
let cardsPersonajes

if (document.querySelector(".container-hero-texto")) {
    textoHero = document.querySelector(".container-hero-texto");
    fechaLanzamiento = document.querySelector(".container-fecha-lanzamiento");
    introduccion = document.querySelector(".container-introduccion-lanzamiento");
    carrusel = document.querySelector(".carrusel-lanzamiento");
    historia = document.querySelector(".container-historia");
    images = document.querySelectorAll(".img");
    textos = document.querySelectorAll(".descripcion-lanzamiento");
    personajes = document.querySelector(".seccion-personajes");
    apodo = document.querySelectorAll(".titulo-apodo");
    nombre = document.querySelectorAll(".titulo-nombre");
    sinopsis = document.querySelector(".sinopsis");
    roles = document.querySelector(".roles");

    cardsPersonajes = document.querySelectorAll(".card-juego-personaje");
}

window.onscroll = function() {
    stickyHeader();

    if (textoHero) {
        difuminar();
        dimensionar();
        viewFechaLanzamiento();
        scrollDescripcion();
        trasladar();
    }
}

function difuminar() {

  if (window.pageYOffset > 50) {
    parallax2.style.opacity = 1;
    parallax2.classList.add("difuminado")
  } 

  if (window.pageYOffset > 400) {
    parallax2.classList.remove("difuminado")
  } 


    if (window.pageYOffset > 150) {
        textoHero.classList.add("difuminado");
    } else {
        textoHero.classList.remove("difuminado");
    }

    if (window.pageYOffset > 200) {
        introduccion.style.opacity = 1;
    } else {
        introduccion.style.opacity = 0;
        introduccion.classList.add("difuminado");
    }

    if (window.pageYOffset > 320) {
        carrusel.style.opacity = 1;
    } else {
        carrusel.style.opacity = 0;
        carrusel.classList.add("difuminado");
    }

    if (window.pageYOffset > 1000) {
        historia.style.opacity = 1;
    } else if (window.pageYOffset < 1500) {
        historia.style.opacity = 0;
        historia.classList.add("difuminado");
    }

    if (window.pageYOffset > 4000) {
        personajes.style.opacity = 1;
    } else {
        personajes.style.opacity = 0;
        personajes.classList.add("difuminado");
    }

    console.log(window.pageYOffset)

    if (window.pageYOffset > 4400) {
        apodo.forEach(function(a) {
            a.style.opacity = 1;
        })
    } else {
        apodo.forEach(function(a) {
            a.style.opacity = 0;
            a.classList.add("difuminado");
        })
        nombre.forEach(function(n) {
            n.style.opacity = 0;
            n.classList.add("difuminado");
        })
    }

    if (window.pageYOffset > 4400) {
        nombre.forEach(function(n) {
            n.style.opacity = 1;
        })
    }


    if (window.pageYOffset > 4700) {
        sinopsis.style.opacity = 1;
    } else {
        sinopsis.classList.add("difuminado");
        roles.classList.add("difuminado");
        sinopsis.style.opacity = 0;
        roles.style.opacity = 0;
    }

    if (window.pageYOffset > 4900) {
        roles.style.opacity = 1;
    }
}

function dimensionar() {
    if (window.pageYOffset > 300) {
        carrusel.classList.add("dimensionar");
    } else {
        carrusel.classList.remove("dimensionar");
    }

    if (window.pageYOffset > 900) {
        historia.classList.add("dimensionar");
    } else {
        historia.classList.remove("dimensionar");
    }

    if (window.pageYOffset > 4700) {
        sinopsis.classList.add("dimensionar");
    } else {
        sinopsis.classList.remove("dimensionar");
        roles.classList.remove("dimensionar");
    }

    if (window.pageYOffset > 4900) {
        roles.classList.add("dimensionar");
    }
}

function viewFechaLanzamiento() {
    if (window.pageYOffset > 500) {
        fechaLanzamiento.style.opacity = 1;
        let posFechaLanzamiento = 1300 - (scrollY);
        fechaLanzamiento.style.left = `${posFechaLanzamiento}px`
    } else {
        fechaLanzamiento.style.opacity = 0;
    }

    if (window.pageYOffset > 1200) {
        fechaLanzamiento.style.left = `5%`
    }
}

function scrollDescripcion() {
    textos.forEach(function(t) {
        t.classList.add("oculto")
    })
    images.forEach(function(t) {
        t.classList.add("img-oculta")
    })
    if (window.pageYOffset < 2200) {
        textos[0].classList.remove("oculto");
        images[0].classList.remove("img-oculta");
    } else if (window.pageYOffset > 2150 && window.pageYOffset < 3000) {
        textos[1].classList.remove("oculto");
        images[1].classList.remove("img-oculta");
    } else if (window.pageYOffset > 3000 && window.pageYOffset < 3600) {
        textos[2].classList.remove("oculto")
        images[2].classList.remove("img-oculta");
    } else {
        textos[3].classList.remove("oculto");
        images[3].classList.remove("img-oculta");
    }

}

function trasladar() {
  console.log(window.pageYOffset)
  let size = cardsPersonajes.length;

  if (window.pageYOffset > 50) {
      parallax2.classList.add("trasladarTop")
  } 

  if (window.pageYOffset > 400) {
    parallax2.classList.remove("trasladarTop")
  } 

  if (window.pageYOffset > 3500) {

      cardsPersonajes.forEach(function(a) {
          a.classList.add("trasladar")
      })
  } else {
      cardsPersonajes.forEach(function(a) {
          a.classList.remove("trasladar")
      })

  }

  if (window.pageYOffset > 4350) {
    apodo.forEach(function(a) {
        a.classList.add("trasladarTop");
    })
  } else{
    apodo.forEach(function(a) {
      a.classList.remove("trasladarTop");
    })
  }

  if (window.pageYOffset > 4450) {
      nombre.forEach(function(n) {
        n.classList.add("trasladarTop");
      })
  } else{
    nombre.forEach(function(n) {
      n.classList.remove("trasladarTop");
    })
  }
}

function stickyHeader() {
    if (window.pageYOffset > header.scrollTop) {
        contenidoHeader.forEach(contenido => contenido.classList.add("sticky"));
        header.classList.add("sticky");
        document.querySelector("#sidebar-menu").style.top = "6vh";
    } else {
        contenidoHeader.forEach(contenido => contenido.classList.remove("sticky"));
        header.classList.remove("sticky");
        document.querySelector("#sidebar-menu").style.top = "10vh";
    }
}
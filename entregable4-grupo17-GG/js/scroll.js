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

let header = document.querySelector(".container-header");
let contenidoHeader = document.querySelectorAll(".c-header");
let textoHero
let fechaLanzamiento
let introduccion
let carrusel
let historia
let images
let textos

if (document.querySelector(".container-hero-texto")) {
    textoHero = document.querySelector(".container-hero-texto");
    fechaLanzamiento = document.querySelector(".container-fecha-lanzamiento");
    introduccion = document.querySelector(".container-introduccion-lanzamiento");
    carrusel = document.querySelector(".carrusel-lanzamiento");
    historia = document.querySelector(".container-historia");
    images = document.querySelectorAll(".img");
    textos = document.querySelectorAll(".descripcion-lanzamiento");
}

window.onscroll = function() {
    stickyHeader();

    if (textoHero) {
        difuminar();
        dimensionar();
        viewFechaLanzamiento();  
        scrollDescripcion();
    }
}

function difuminar() {  
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

}

function dimensionar(){

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
  textos.forEach(function(t){
      t.classList.add("oculto")
  })
  images.forEach(function(t){
      t.classList.add("img-oculta")
  })
  console.log(window.pageYOffset)
  if(window.pageYOffset<2200){
    textos[0].classList.remove("oculto");
    images[0].classList.remove("img-oculta");
  }
  else if(window.pageYOffset >= 2150 && window.pageYOffset < 3000){
    textos[1].classList.remove("oculto");
    images[1].classList.remove("img-oculta");
  }else if(window.pageYOffset >=3000 && window.pageYOffset < 3600){
    textos[2].classList.remove("oculto")
    images[2].classList.remove("img-oculta");
  }else{
    textos[3].classList.remove("oculto");
    images[3].classList.remove("img-oculta");
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
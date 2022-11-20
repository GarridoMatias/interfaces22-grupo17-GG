"use strict"


let clickMenu = document.querySelector('.hamburger-menu');
let btnMenu = document.querySelector('.bar');

clickMenu.addEventListener("click", openMenu);

function openMenu() {

    let asd = btnMenu.classList.contains('animate');
    btnMenu.classList.toggle('animate');
    if (!asd) {
        document.querySelector("#sidebar-menu").style.display = "block";
        document.querySelector("#btn-close-menu").style.display = "block";

    } else {
        document.querySelector("#sidebar-menu").style.display = "none";
        document.querySelector("#contenido-menu").style.marginLeft = "0";
        document.querySelector("#btn-close-menu").style.display = "none";
    }
}

let header = document.querySelector(".container-header");
let contenidoHeader = document.querySelectorAll(".c-header");
let textoHero
let fechaLanzamiento

if (document.querySelector(".container-hero-texto")){
  textoHero = document.querySelector(".container-hero-texto");
  fechaLanzamiento = document.querySelector(".container-fecha-lanzamiento");
}
 
window.onscroll = function() { 
    stickyHeader();

    if(textoHero){
      difuminar();
      viewFechaLanzamiento();
    }
 }
 
 function difuminar() {
    if (window.pageYOffset > 100) {
       textoHero.classList.add("difuminado");
       fechaLanzamiento.classList.remove("difuminado");
     } else {
       textoHero.classList.remove("difuminado");
       fechaLanzamiento.classList.add("difuminado");
     } 
 }

 function viewFechaLanzamiento() {
  console.log('asdasd')
 }

 function stickyHeader() {
  if (window.pageYOffset > header.scrollTop) {
      contenidoHeader.forEach(contenido => contenido.classList.add("sticky"));
      header.classList.add("sticky")
  } else {
      contenidoHeader.forEach(contenido => contenido.classList.remove("sticky"));
      header.classList.remove("sticky")
  }

}

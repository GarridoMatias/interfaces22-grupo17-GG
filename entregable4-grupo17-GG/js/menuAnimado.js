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
let header = document.querySelector(".container-header")
let contenidoHeader = document.querySelectorAll(".c-header");

window.onscroll = function() {
    stickyHeader();
}

function stickyHeader() {

    if (window.pageYOffset > header.scrollTop) {
        console.log("wntre")
        contenidoHeader.forEach(contenido => contenido.classList.add("sticky"));
        header.classList.add("sticky")
    } else {
        contenidoHeader.forEach(contenido => contenido.classList.remove("sticky"));
        header.classList.remove("sticky")
    }

}
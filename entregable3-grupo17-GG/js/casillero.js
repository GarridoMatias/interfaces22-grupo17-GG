"use strict"

class Casillero {

    //Constructor de la clase 
    constructor(x, y, img, ctx) {
        this.ocupado = false;
        this.x = x;
        this.y = y;
        this.width = 85;
        this.height = 85;
        this.img = img;
        this.ctx = ctx;
        this.fichaOcupa = null;
    }

    //Devuelve la coordenada x del tableroSpot
    getX() {
        return this.x;
    }

    //Devuelve la coordenada y del tableroSpot 
    getY() {
        return this.y;
    }



    //Dibuja un tableroSpot
    drawImage(n, ctx) {
        let img = this.img;
        let x = this.x;
        let y = this.y;
        let width = this.width;
        let height = this.height;
        if (n == 0) {
            this.img.onload = function() {
                ctx.drawImage(img, x, y, width, height);
            }
        } else {
            ctx.drawImage(img, x, y, width, height);
        }
    }
}
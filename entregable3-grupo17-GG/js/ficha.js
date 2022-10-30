//CLASE FICHA
"use strict"

class Ficha {
    //Constructor de la clase 
    constructor(x, y, img, ctx) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
        this.img = img;
        this.ctx = ctx;
    }

    //Devuelve la coordenada x de la ficha
    getX() {
        return this.x;
    }

    //Devuelve la coordenada y de la ficha
    getY() {
        return this.y;
    }

    //Dibuja una ficha
    drawImage() {
        let ctx = this.ctx;
        let img = this.img;
        let x = this.x;
        let y = this.y;
        let width = this.width;
        let height = this.height;

        this.img.onload = function() {
            ctx.drawImage(img, x, y, width, height);
        }
    }
}
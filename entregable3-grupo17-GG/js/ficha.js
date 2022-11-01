//CLASE FICHA
"use strict"

class Ficha {
    //Constructor de la clase 
    constructor(x, y, img, ctx) {
        this.selected = false;
        this.posicionada = false;
        this.x = x;
        this.y = y;
        this.xi = x;
        this.yi = y;
        this.xf = 80;
        this.yf = 80;
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
        let xf = this.width;
        let yf = this.height;

        this.img.onload = function() {

            ctx.drawImage(img, x, y, xf, yf);

        }
    }

    //Verifica si en la posición donde fue clickeado el mouse hay una ficha
    verificarSelect(e, x, y) {
        if (!this.selected) {

            let xCursor = e.pageX - x;
            let yCursor = e.pageY - y;
            if (xCursor > this.x && xCursor < this.x + 80 && yCursor > this.y && yCursor < this.y + 80) {
                this.selected = true;
            }
        }
    }

    //Corrige la posición del mouse para que se desplace la ficha desde el centro  
    actualizarPos(x, y) {
        if (this.selected && !this.posicionada) {
            this.x = x - 50;
            this.y = y - 50;
        }

    }
}
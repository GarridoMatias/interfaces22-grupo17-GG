class Casillero {

    //Constructor de la clase 
    constructor(x, y, img, ctx) {
        this.ocupado = false;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.img = img;
        this.ctx = ctx;
    }

    //Devuelve la coordenada x del tableroSpot
    getX() {
        return this.x;
    }

    //Devuelve la coordenada y del tableroSpot 
    getY() {
        return this.y;
    }

    //Crea el tableroSpot oculto arriba de la primera fila, donde se van a soltar las fichas
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x + this.width / 2, this.y + this.width / 2, this.width / 2, 0.34, 2.79)
        this.ctx.stroke();

    }

    //Dibuja un tableroSpot
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
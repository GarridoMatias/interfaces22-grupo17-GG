"use strict"
//CLASE TABLERO\
class Tablero {

    constructor(canvas, ctx, cuadrilla, filas) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.cuadrilla = cuadrilla;
        this.filas = filas;
    }

    //CALCULAR EL WIDTH Y EL HEIGTH A PARTIR DE LAS FILAS
    inicializar() {
        let xInit = 280;
        let yInit = 200;
        for (let i = 0; i < filas; i++) {
            this.cuadrilla[i] = [];
            for (let j = 0; j <= filas; j++) {
                let x = xInit + (j * 100);
                let y = yInit + (i * 100);
                let img = new Image();
                img.src = "./images/piezaTablero.png";
                cuadrilla[i][j] = new Casillero(x, y, img, this.ctx);
            }
        }
    }

    dibujar() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= this.filas; j++) {
                cuadrilla[i][j].drawImage();
            }
        }
    }
}
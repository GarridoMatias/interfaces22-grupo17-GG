"use strict"
//CLASE TABLERO\
class Tablero {

    constructor(canvas, ctx, cuadrilla, filas) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.cuadrilla = cuadrilla;
        this.filas = filas;
        this.columnasY = filas;
        this.filasX = filas - 1
    }

    setFilas(filas) {
        this.filas = filas;
    }

    inicializar(imagen) {
        //CALCULO DE X e Y INICIALES CON RESPECTO A LA CANTADIDAD DE FILAS
        let xInit = this.calcularInit(this.canvas.width, parseInt(this.filas) + 1);
        let yInit = this.calcularInit(this.canvas.height, this.filas);

        for (let i = 0; i < filas; i++) {
            this.cuadrilla[i] = [];
            for (let j = 0; j <= filas; j++) {
                let x = xInit + (j * (85));
                let y = yInit + (i * (85));
                let img = new Image();
                img.src = imagen;
                cuadrilla[i][j] = new Casillero(x, y, img, this.ctx);
            }
        }
    }

    dibujar(n, ctx) {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= this.filas; j++) {
                cuadrilla[i][j].drawImage(n, ctx);

            }
        }
    }

    calcularInit(medida, filas) {
        let centroCanvas = medida / 2;

        let centroTablero = (filas * 85) / 2;

        return centroCanvas - centroTablero;

    }

    lineaHorizontal(i, j) {
        let posicionesCubiertas = 0;
        for (let x = 0; x <= this.filas; x++) {
            if (this.cuadrilla[i][x].ocupado && this.cuadrilla[i][x].fichaOcupa.jugador == this.cuadrilla[i][j].fichaOcupa.jugador) {
                posicionesCubiertas++;
            } else {
                posicionesCubiertas = 0
            }
            if (posicionesCubiertas >= this.filas) {
                return true;
            }
        }

        return false;
    }

    lineaVertical(i, j) {
        let posicionesCubiertas = 0;
        for (let y = 0; y < this.filas; y++) {
            if (this.cuadrilla[y][j].ocupado && this.cuadrilla[y][j].fichaOcupa.jugador == this.cuadrilla[i][j].fichaOcupa.jugador) {
                posicionesCubiertas++;

            } else {
                posicionesCubiertas = 0
            }
            if (posicionesCubiertas >= this.filas) {
                return true;
            }
        }

        return false;
    }

    verificarJugada(i, j) {
        if (this.lineaHorizontal(i, j)) {
            console.log("gane en X");
            let ganador = this.cuadrilla[i][j].fichaOcupa.jugador;
            this.ctx.fillText(`¡Gano ${ganador} !`,this.canvas.width/2 - 100,60);
        } else if (this.lineaVertical(i, j)) {
            console.log("gane en Y");
            let ganador = this.cuadrilla[i][j].fichaOcupa.jugador;
            this.ctx.fillText(`¡Gano ${ganador} !`,this.canvas.width/2 - 100,60);
        }
    }

    verificarCasillero(ficha, e, x) {
        if (!ficha.posicionada && ficha.selected) {
            ficha.selected = false;
            let xCursor = e.clientX - x;
            let dentroDelTablero = false;

            for (let j = 0; j <= this.filas; j++) {

                if (xCursor > this.cuadrilla[0][j].x && xCursor < this.cuadrilla[0][j].x + 80) {
                    dentroDelTablero = true;
                    let casilleroDisponible = false;
                    let indiceCasilleroDisponible;

                    for (let i = 0; i < this.filas; i++) {
                        if (!this.cuadrilla[i][j].ocupado) {
                            casilleroDisponible = true;
                            indiceCasilleroDisponible = i;
                        }
                    }
                    if (casilleroDisponible) {
                        this.cuadrilla[indiceCasilleroDisponible][j].ocupado = true;


                        ficha.x = this.cuadrilla[indiceCasilleroDisponible][j].x + 9;
                        ficha.y = this.cuadrilla[indiceCasilleroDisponible][j].y + 8;
                        // si era valida la posicion no se mueve mas
                        this.cuadrilla[indiceCasilleroDisponible][j].fichaOcupa = ficha;
                        ficha.posicionada = true;
                        this.verificarJugada(indiceCasilleroDisponible, j);

                    } else {
                        console.log("casillero no disponible");
                        ficha.x = ficha.xi;
                        ficha.y = ficha.yi;


                    }
                }
            }
            if (!dentroDelTablero) {
                ficha.x = ficha.xi;
                ficha.y = ficha.yi;

            }
        }
    }
}
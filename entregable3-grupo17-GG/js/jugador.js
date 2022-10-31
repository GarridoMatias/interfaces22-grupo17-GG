//CLASE JUGADOR

class Jugador {
    constructor(fichas, pila, ctx, ladoJugador) {
        this.fichas = fichas;
        this.pila = pila;
        this.ctx = ctx;
        this.ladoJugador = ladoJugador;
    }

    getFichas() {
        return this.fichas;
    }

    setFichas(fichas) {
        this.fichas = fichas;
    }

    inicializar(imagen) {
        //CALCULO DE X e Y INICIALES CON RESPECTO AL JUGADOR
        let xInit = this.ladoJugador;
        let yInit = 50;

        for (let i = 0; i < this.fichas; i++) {
            let y = yInit + (i * (25));
            let img = new Image();
            img.src = imagen;
            this.pila[i] = new Ficha(xInit, y, img, this.ctx);
            if (i > 0) {
                this.pila[i].clickeable(25);
            }
        }
    }

    dibujar() {
        for (let i = 0; i < this.fichas; i++) {
            this.pila[i].drawImage();
        }
    }

}
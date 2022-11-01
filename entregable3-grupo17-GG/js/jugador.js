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
        let yInit = 0;

        for (let i = 0; i < this.fichas; i++) {
            let x;
            let y = yInit;
            if (i < 7) {
                x = xInit;
                y = y + (i * 80);
            } else if (i < 14) {
                x = xInit + 80;
                y = ((i - 7) * (80));
            }

            let img = new Image();
            img.src = imagen;
            this.pila[i] = new Ficha(x, y, img, this.ctx);
        }
    }

    dibujar() {
        for (let i = 0; i < this.fichas; i++) {
            this.pila[i].drawImage();
        }

    }

}
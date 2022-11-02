//CLASE JUGADOR

class Jugador {
    constructor(pila, ctx, ladoJugador, canvasHeight, filas) {
        this.fichas = ((filas * (filas + 1)) / 2);
        this.pila = pila;
        this.ctx = ctx;
        this.ladoJugador = ladoJugador;
        this.canvasHeight = canvasHeight;
        this.filas = filas;
    }

    setFilas(filas) {
        this.filas = filas;

        this.fichas = ((this.filas * (parseInt(this.filas) + 1)) / 2);

    }
    getFichas() {
        return this.fichas;
    }

    clear() {
        this.pila = []
    }

    inicializar(imagen) {

        let fichasPorColumna = (this.fichas / 2);
        let heightMax = this.canvasHeight / (fichasPorColumna + 1);
        let distancia;
        if (heightMax > 80) {
            distancia = 80
        } else {
            distancia = heightMax;
        }
        //CALCULO DE X e Y INICIALES CON RESPECTO AL JUGADOR
        let xInit = this.ladoJugador;
        let yInit = 0;


        for (let i = 0; i < this.fichas; i++) {
            let x;
            let y = yInit;
            if (i < fichasPorColumna) {
                x = xInit;
                y = y + (i * distancia);
            } else {
                x = xInit + 80;
                y = y + ((i - fichasPorColumna) * (distancia));
            }

            let img = new Image();
            img.src = imagen;
            this.pila[i] = new Ficha(x, y, img, this.ctx);
        }
    }

    dibujar(n, ctx) {
        for (let i = 0; i < this.fichas; i++) {
            this.pila[i].drawImage(n, ctx);
        }

    }

}
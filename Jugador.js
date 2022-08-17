class Jugador {
    constructor(vida, tiempo, armas = [], estaVivo = true){
        this.estaVivo = estaVivo;
        this.vida = vida;
        this.tiempoDeVida = tiempo;
        this.armas = armas;
        // arma seleccionada
        this.descontarTiempoDeVida();
    }
    
    // seleccionar arma

    recolectarArma(nuevaArma){
        this.armas.push(nuevaArma);
    }

    atacar(enemigo, arma){
        enemigo.vida -= arma.poder;
        if(enemigo.vida <= 0){
            // TODO: destruir enemigo
            enemigo.vida = 0;
        }
    }

    recibirDano(dano) {
        // animacion de daño
        // sonido
        // etc
        this.vida -= dano;
        if (this.vida <= 0) {
            // animacion muerte
            this.estaVivo = false;
            this.vida = 0;
            console.error('jugador murio');
        }
    }

    // evento recursivo que descuente tiempo
    descontarTiempoDeVida(){
        console.info('descontar tiempo de vida', this.tiempoDeVida);
        if(this.tiempoDeVida <= 0 || !this.estaVivo) {
            console.error('Sin tiempo')
            return;
        };

        this.tiempoDeVida--;
        setTimeout(() => {
            this.descontarTiempoDeVida();
        }, 1000);
    }
}

export default Jugador;
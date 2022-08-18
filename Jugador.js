class Jugador {
    constructor(vida, tiempo, armas = [], nombre, estaVivo = true){
        this.nombre = nombre
        this.estaVivo = estaVivo;
        this.vida = vida;
        this.tiempoDeVida = tiempo;
        this.armas = armas;
        this.armaEquipada;
        // arma seleccionada
        this.descontarTiempoDeVida();
    }
    
    // seleccionar arma

    recolectarArma(nuevaArma){
        this.armas.push(nuevaArma);
    }
    equiparArma(index){
        return this.armaEquipada = this.armas[index];
    }
    cambiarArma(){
        const numRandom = Math.floor(Math.random() * this.armas.length);
        this.equiparArma(numRandom)
        // this.equiparArma(equiparArma)
    }
    atacar(enemigo, arma){
        console.log('Ataco con: ', arma.nombre)
        enemigo.recibirDano(arma.poder, this)
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
            console.log("Has MORIDO", 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
        }
    }
    // evento recursivo que descuente tiempo
    descontarTiempoDeVida(){
        // console.info('descontar tiempo de vida', this.tiempoDeVida);
        if(this.tiempoDeVida <= 0 || !this.estaVivo) {
            // console.error('Sin tiempo')
            return;
        };

        this.tiempoDeVida--;
        setTimeout(() => {
            this.descontarTiempoDeVida();
        }, 1000);
    }
}

export default Jugador;
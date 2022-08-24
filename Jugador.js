import ArmaMele from "./ArmaMele.js";

class Jugador {
    constructor(vida, tiempo, armas = [], nombre, estaVivo = true) {
        this.nombre = nombre
        this.estaVivo = estaVivo;
        this.vida = vida;
        this.tiempoDeVida = tiempo;
        this.armas = armas;
        this.armaEquipada;
        // arma seleccionada
        this.descontarTiempoDeVida();
    }

    getArmas() {
        return this.armas
    }
    getArmaEquipada() {
        return this.armaEquipada
    }
    getArmasManuales(){
        return this.armas.filter(arma => arma.tipo === 'manual')
    }
    getArmasFuego(){
        return this.armas.filter(arma => arma.tipo === 'fuego')
    }
    getMejorArma(){
        let numeroMayor = 0;
        let mejorArma;
        for(let arma of this.armas){
            if(arma.poder > numeroMayor) mejorArma = arma
        }
        return mejorArma
    }
    getVida() {
        return this.vida;
    }

    recolectarArma(nuevaArma) {
        this.armas.push(nuevaArma);
    }
    equiparArma(index) {
        return this.armaEquipada = this.armas[index];
    }
    cambiarArma() {
        const numRandom = Math.floor(Math.random() * this.getArmas().length);
        this.equiparArma(numRandom)
    }
    atacar(enemigo, arma) {
        console.log('%c-------Jugador ataka------', 'background-color: yellow; color: black');
        if (arma.durabilidad <= 0) {
            console.log('%cSe rompio el arma mono...', 'background-color: red');
            this.armas = this.armas.filter(gun => gun.nombre !== arma.nombre);
            if (this.armas.length > 0) this.cambiarArma();
        }
        if (this.armas.length === 0) {
            const faka = new ArmaMele('Faka', "deplorable")
            this.recolectarArma(faka)
            this.equiparArma(0);
            console.log('Se equipo una faka del cielo');
        }
        arma = this.armaEquipada
        console.log(arma);
        if (arma.tipo === "fuego") {
            if (arma.balas <= 0) {
                arma.recargar()
                console.log('Recargando arma');
            } else {
                arma.poder = arma.disparar()
            }
        }
        enemigo.recibirDano(arma.poder, this);
        arma.desgastar();
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
            console.log("%cHas MORIDO", 'font-weight: bold; font-size: 50px;color: green; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
        }
    }
    // evento recursivo que descuente tiempo
    descontarTiempoDeVida() {
        // console.info('descontar tiempo de vida', this.tiempoDeVida);
        if (this.tiempoDeVida <= 0 || !this.estaVivo) {
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
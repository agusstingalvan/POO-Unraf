import Arma from "./Arma.js";

export default class ArmaFuego extends Arma {
    balas = 25;
    constructor(nombre, estado) {
        super(nombre, estado)
        this.tipo = 'fuego';
    }
    recargar() {
        this.balas = 25;
    }
    disparar() {
        const disparo = Math.floor(Math.random() * 5)
        this.balas -= disparo;
        return this.poder + disparo;
        console.log(this.durabilidad);
    }
}
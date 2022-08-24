import Arma from "./Arma.js"

export default class ArmaMele extends Arma {
    constructor(nombre, estado) {
        super(nombre, estado);
        this.tipo = 'manual'
    }
    afilarArma() {
        this.poder = this.poder + (this.poder * 40) / 100;
    }
}
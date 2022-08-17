class Arma {
    constructor(nombre, poder, esManual, balas = null){
        this.nombre = nombre;
        this.poder = poder;
        this.esManual = esManual;
        if(!esManual) {
            this.balas = balas;
        }
        // TODO: agregar balas por ataque
    }
}

export default Arma;
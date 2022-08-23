class Arma {
    constructor(nombre, estado = "deplorable") {
        this.nombre = nombre;
        this.estado = estado;
        // TODO: agregar balas por ataque
        switch (this.estado) {
            case "nueva":
                this.durabilidad = 100;
                this.poder = 65;
                break;
            case "degastada":
                this.durabilidad = 50;
                const numeroMinimo = Math.floor(Math.random() * 15)
                this.poder = 50 - numeroMinimo;
                break;
            default:
                this.durabilidad = 25;
                this.poder = Math.floor(Math.random() * 25)
                break;
        }
    }
    desgastar() {
        // this.durabilidad = this.durabilidad - 10;
        this.durabilidad = this.durabilidad - (this.poder * 40) / 100
    }
}

export default Arma;
class Enemigo {
    constructor(props){
        const { nombre, vida, poder } = props; // destructuring
        this.vida = vida;
        this.poder = poder;
        this.nombre = nombre;
    }

    atacar(jugador){
        console.log('dañar al jugador')
        jugador.recibirDano(this.poder);
    }
}

export default Enemigo;
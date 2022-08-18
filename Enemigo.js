class Enemigo {
    constructor(props){
        const { nombre, vida, poder } = props; // destructuring
        this.vida = vida;
        this.poder = poder;
        this.nombre = nombre;
        // console.log(this.nombre)
    }
    atacar(jugador){
        // console.log('dañar al jugador')
        // jugador.recibirDano(this.poder);
        jugador.recibirDano(this.poder);
    }
    recibirDano(dano, jugador){
        this.vida -= dano;
        if(this.vida <= 0){
            // TODO: destruir enemigo
            this.vida = 0;
            // jugador.cambiarArma()
            console.log(`%c MORIDO: ${this.nombre}`,  'color: yellow; background-color: fuchsia;')
        }
    }
}
export default Enemigo;
import Arma from './Arma.js';
import Enemigo from './Enemigo.js';
import Jugador from './Jugador.js';

const jugador = new Jugador(100, 50);
console.log('jugador',jugador);

const cuchillo = new Arma('cuchillo', 10, true);
const pistola = new Arma('pistola', 20, false, 7);
const escopeta = new Arma('escopeta', 40, false, 8);
const espada = new Arma('espada', 40, true, 8);

console.log(`cuchillo`, cuchillo);
// console.log(`pistola`, pistola);
// console.log(`escopeta`, escopeta);
// console.log(`espada`, espada);

jugador.recolectarArma(cuchillo);
jugador.recolectarArma(pistola);
jugador.recolectarArma(escopeta);
jugador.recolectarArma(espada);
console.log('jugador',jugador);

const enemigos = [];
for (let i = 1; i <= 10; i++) {
    const enemyProps = {
        vida: 100,
        poder: Math.random()*100,
        nombre: `enemigo-${i%2===0 ? 'par-'+i : i}`, // 'enemigo-'+i
    }
    enemigos.push(new Enemigo(enemyProps))
}
console.log(enemigos);

// SIMULAR ATAQUE A ENEMIGO
console.log('Simulacion de ataque');
while(enemigos.length > 0 && jugador.estaVivo){
    const enemigo = enemigos.pop();
    console.log('enemigo', enemigo);
    while(enemigo.vida > 0 && jugador.estaVivo){
        const arma = jugador.armas[parseInt(Math.random()*jugador.armas.length)];
        jugador.atacar(enemigo, arma);
        console.log('enemigo', enemigo);
        console.log('arma', arma);
        if (enemigo.vida > 0) {
            enemigo.atacar(jugador);
            console.log('jugador atacado', jugador);
        }
    }
    console.log('enemigo muerto');
}
console.warn('No hay mas enemigos');
// console.log('enemigo', enemigo);
// jugador.atacar(enemigo, jugador.armas[0]);
// console.log('enemigo', enemigo);
// if(enemigo.vida > 0) enemigos.push(enemigo);
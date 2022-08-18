import Arma from './Arma.js';
import Enemigo from './Enemigo.js';
import Jugador from './Jugador.js';

const nombre  = window.prompt('Ingrese un nombre');

const jugador = new Jugador(400, 50, [], nombre);
if(nombre){
    console.log('%c Bienvenido ' + nombre, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
}else{
    console.log('%c Bienvenido desconocido', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
}
const cuchillo = new Arma('cuchillo', 10, true);
const pistola = new Arma('pistola', 20, false, 7);
const escopeta = new Arma('escopeta', 40, false, 8);
const espada = new Arma('espada', 40, true, 8);
jugador.recolectarArma(pistola);
jugador.recolectarArma(cuchillo);
jugador.recolectarArma(espada);
jugador.recolectarArma(escopeta)

let contador = 0;
let enemigos = [];
while(contador < 10){
    let objetoInicial = {
        nombre: `Enemigo - ${contador}`,
        vida: Math.floor(Math.random() * 100),
        poder: Math.floor(Math.random() * 60)
    }
    enemigos.push(new Enemigo(objetoInicial))
    contador++;
}
console.table(enemigos)

while(enemigos.length > 0 && jugador.estaVivo){
    const enemigo = enemigos.shift();
    while(enemigo.vida > 0 && jugador.estaVivo){
        if(enemigos.length <= 0){
            console.log("%cMATASTE A TODOS MAQUINA", "color: red; font-size: 50px"
            );
            break;
        }
        if(jugador.armaEquipada === undefined) jugador.cambiarArma();
        jugador.atacar(enemigo, jugador.armaEquipada)
        // const arma = jugador.armas[parseInt(Math.random()*jugador.armas.length)];
        // jugador.atacar(enemigo, arma);
        if (enemigo.vida > 0) {
            enemigo.atacar(jugador);
        }
    }
}
// const enemigos = [];
// for (let i = 1; i <= 10; i++) {
//     const enemyProps = {
//         vida: 100,
//         poder: Math.random()*100,
//         nombre: `enemigo-${i%2===0 ? 'par-'+i : i}`, // 'enemigo-'+i
//     }
//     enemigos.push(new Enemigo(enemyProps))
// }

// console.log('Simulacion de ataque');
// while(enemigos.length > 0 && jugador.estaVivo){
//     const enemigo = enemigos.pop();
    // while(enemigo.vida > 0 && jugador.estaVivo){
    //     const arma = jugador.armas[parseInt(Math.random()*jugador.armas.length)];
    //     jugador.atacar(enemigo, arma);
    //     if (enemigo.vida > 0) {
    //         enemigo.atacar(jugador);
    //     }
    // }
// }
// console.warn('No hay mas enemigos');
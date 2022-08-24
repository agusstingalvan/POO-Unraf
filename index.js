import Arma from './Arma.js';
import ArmaFuego from './ArmaFuego.js';
import ArmaMele from './ArmaMele.js';
import Enemigo from './Enemigo.js';
import Jugador from './Jugador.js';

const nombreJugador = prompt('Ingrese el nombre del jugador: ');
const jugador = new Jugador(500, 50, [], nombreJugador);
if (nombreJugador) {
    console.log('%c Bienvenido ' + nombreJugador, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')
} else {
    console.log('%c Bienvenido desconocido', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')

}

const pistola = new ArmaFuego('pistola', "desgastada");
const escopeta = new ArmaFuego('escopeta', "nueva");
const espada = new ArmaMele('espada', "deplorable");
espada.afilarArma();
jugador.recolectarArma(espada);
jugador.recolectarArma(pistola);
jugador.recolectarArma(escopeta);

if (jugador.armaEquipada === undefined) jugador.equiparArma(0);


const cantidadEnemigos = prompt('Ingrese la cantidad de enemigos') || 10
let contador = 0;
let enemigos = [];
while (contador < cantidadEnemigos) {
    let objetoInicial = {
        nombre: `Enemigo - ${contador}`,
        vida: Math.floor(Math.random() * 100),
        poder: Math.floor(Math.random() * 60)
    }
    enemigos.push(new Enemigo(objetoInicial))
    contador++;
}
console.table(enemigos)

console.log("%cLista de armas", "color: red; font-size: 24px")
console.table(jugador.getArmas())
console.log("%cArmas manuales", "color: orange; font-size: 24px")
console.table(jugador.getArmasManuales())
console.log("%cArmas de fuego", "color: blue; font-size: 24px")
console.table(jugador.getArmasFuego())
console.log("%cMejor arma", "color: orange; font-size: 28px")
console.table(jugador.getMejorArma())
while (enemigos.length > 0 && jugador.estaVivo) {
    const enemigo = enemigos.shift();
    while (enemigo.vida > 0 && jugador.estaVivo) {
        jugador.atacar(enemigo, jugador.armaEquipada)
        if (enemigo.vida > 0) {
            enemigo.atacar(jugador);
        }
        if (enemigos.length <= 0 && enemigo.vida <= 0) {
            console.log("%cMATASTE A TODOS MAQUINA", "color: red; font-size: 50px"
            );
            break;
        }
    }
}
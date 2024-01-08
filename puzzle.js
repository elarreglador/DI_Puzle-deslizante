//DEFINICIONES
let imagen = []; //array de imagenes
let orden = []; //para verificar la victoria
for (let i = 0; i < 16; i++) {
  //asigna la imagen a un array de imagenes
  imagen[i] = document.getElementById(i);
}
let vacio = 0; //posicion inicial de la celda vacia
let rutaVacio = "./img/blanco.jpg";
let movimientos = 0; //movimientos jugados
let sacudiendo = false; //true si estamos "sacudiendo" el tablero

//MAIN
//ponemos las imagenes en cada una de las celdas
imagen[0].src = rutaVacio;
for (let i = 1; i < 16; i++) {
  imagen[i].src = "./img/" + i + ".jpg";
}
//lo mismo pero con numeros para verificar esVictoria()
for (let i = 0; i < 16; i++) {
  orden[i] = i;
}

//sacude tablero para empezar a jugar
sacudeTablero();

//LISTENERS
//agregamos eventos a cada una de las imagenes que llaman a la funcion intercambia
for (let i = 0; i < 16; i++) {
  imagen[i].addEventListener("click", () => {
    intercambia(i);
  });
}

//FUNCIONES
//movemos al azar las imagenes
function sacudeTablero() {
  sacudiendo = true;
  let rnd;
  for (let i = 0; i < 25; i++) { //CAMBIA EL VALOR "i < 25" a uno mayor para dificultar la partida
    rnd = Math.floor(Math.random() * 17);
    intercambia(rnd);
  }
  movimientos = 0;
  sacudiendo = false;
}

//mueve la pieza hacia el espacio en blanco
function intercambia(id) {
  if ((id == vacio - 1) || (id == vacio + 1) || (id == vacio - 4) || (id == vacio + 4)) {
    if (!intercambiaMalElBorde(id, vacio)) { //y si no estamos en los bordes conflictivos

      imagen[vacio].src = imagen[id].src;
      imagen[id].src = rutaVacio;

      vacio = id; //actualiza posicion de la celda vacia
      movimientos++;
    }
  }
  //ver verificacion de victoria esVictoria()
  orden[vacio] = orden[id];
  orden[id] = 0;


  if ((esVictoria()) && (sacudiendo == false)) {
    alert("¡Enhorabuena! Has completado el puzle en " + movimientos + " movimientos.");
    sacudeTablero();
  };
}

function intercambiaMalElBorde(id, vacio) {
  //informa si se va a mover el hueco de las posiciones conflictivas.
  //esto sucede cuando intentamos mover una pieza desde la ultima 
  //posicion del lateral derecho a la posicion primera de la siguiente linea.
  retorno = false;
  // 3 y 4 y viceversa
  if ((vacio == 3) && (id == 4)) {
    retorno = true;
  }
  if ((vacio == 4) && (id == 3)) {
    retorno = true;
  }
  // 7 y 8 y viceversa
  if ((vacio == 7) && (id == 8)) {
    retorno = true;
  }
  if ((vacio == 8) && (id == 7)) {
    retorno = true;
  }
  // 11 y 12 y viceversa
  if ((vacio == 11) && (id == 12)) {
    retorno = true;
  }
  if ((vacio == 12) && (id == 11)) {
    retorno = true;
  }
  return retorno;
}

//devuelve true si el vector orden esta ordenado correctamente
//este vector se desordena/ordena en la misma forma que las piezas
//del puzle.
function esVictoria() {
  let victoria = true;
  for (let i = 0; i < 16; i++) {
    if (orden[i] != i) {
      victoria = false;
      return victoria
    }
  }
  return victoria;
}
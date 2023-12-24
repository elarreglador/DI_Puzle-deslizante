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
    imagen[vacio].src = imagen[id].src;
    imagen[id].src = rutaVacio;

    //ver verificacion de victoria esVictoria()
    orden[vacio] = orden[id];
    orden[id] = 0;

    vacio = id; //actualiza posicion de la celda vacia
    movimientos++;
    if ((esVictoria())&&(sacudiendo==false)){
      alert("¡Enhorabuena! Has completado el puzle en " + movimientos + " movimientos.");
      sacudeTablero();
    };
  }
}

//devuelve true si el vector orden esta ordenado correctamente
//este vector se desordena/ordena en la misma forma que las piezas
//del puzle.
function esVictoria() {
  let victoria = true;
  for (let i = 0; i < 16; i++) {
    if (orden[i] != i){
      victoria = false;
      return victoria
    }
  }
  return victoria;
}
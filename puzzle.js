//DEFINICIONES
let imagen = [];
for (let i = 0; i < 16; i++) {
  imagen[i] = document.getElementById(i);
}
let vacio = 0;
let rutaVacio = "./img/blanco.jpg";
let movimientos = 0;

//MAIN
//ponemos las imagenes en cada una de las celdas
imagen[0].src = rutaVacio;
for (let i = 1; i < 16; i++) {
  imagen[i].src = "./img/" + i + ".jpg";
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
  let rnd;
  for (let i = 0; i < 20; i++) {
    rnd = Math.floor(Math.random() * 17);
    intercambia(rnd);
  }
  movimientos = 0;
}

//mueve la pieza hacia el espacio en blanco
function intercambia(id) {
  if ((id == vacio - 1) || (id == vacio + 1) || (id == vacio - 4) || (id == vacio + 4)) {
    movimientos++;
    imagen[vacio].src = imagen[id].src;
    imagen[id].src = rutaVacio;
    vacio = id;
    victoria();
  }
}

function victoria() {

}
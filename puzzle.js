//DEFINICIONES
let imagen = [];
for (let i = 0; i < 16; i++) {
  imagen[i] = document.getElementById(i);
}
let vacio = 0;
let rutaVacio = "./img/blanco.jpg";

//MAIN
//ponemos las imagenes en cada una de las celdas
imagen[0].src = rutaVacio;
for (let i = 1; i < 16; i++) {
  imagen[i].src = "./img/" + i + ".jpg";
}

//movemos al azar las imagenes
let rnd;
for (let i=0; i<100; i++){
  rnd = Math.floor(Math.random() * 17);
  intercambia(rnd);
}

//LISTENERS
//agregamos eventos a cada una de las imagenes que llaman a la funcion intercambia
for (let i = 0; i < 16; i++) {
  imagen[i].addEventListener("click", () => {
    intercambia(i);
  });
}

//FUNCIONES
//mueve la pieza hacia el espacio en blanco
function intercambia(id) {
  if ((id == vacio - 1)||(id == vacio + 1)||(id == vacio - 4)||(id == vacio + 4)) {
    imagen[vacio].src = imagen[id].src;
    imagen[id].src = rutaVacio;
    vacio = id;
  } 
}
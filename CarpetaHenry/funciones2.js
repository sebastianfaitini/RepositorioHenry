//PARA VER ESTE RESULTADO HAY QUE ABRIR node desde la terminal y luego copiar el codigo y pegarlo

function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return ("el nombre retornado por la funcion cuidadoConElConsoleLog es:" + cuidadoConElConsoleLog("camilo"));
}


function cuidadoConElReturn (nombre) {
    return nombre;
    console.log(nombre);
}



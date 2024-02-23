function viajar (destino) {
    if (destino === "brasil") {
        console.log ("gire a la IZQUIERDA");

    }
    else if (destino === "ARGENTINA") { 
        console.log ("gire a la DERECHA");

    }
    else {
        console.log ("nos PERDIMOS");
    }
}

viajar ("brasil");
viajar ("ARGENTINA");
viajar ("donde estoy");

function puedeManejar (edad) {
    if (edad >=18){
        console.log (true);
    }
    console.log (false)
}
puedeManejar (17);

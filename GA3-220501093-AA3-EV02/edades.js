//create an array of 10 random integers called edades between 0 and 120
var edades = [];
for (var i = 0; i < 10; i++) {
    edades[i] = Math.floor(Math.random() * 121);
}


//create a function to determine the ages above 18
function edadesMayores18(edades) {
    var edadesMayores18 = [];
    for (var i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            edadesMayores18.push(edades[i]);
        }
    }
    return edadesMayores18.length;
}

//create a function to determine the ages above 60
function edadesMayores60(edades) {
    var edadesMayores60 = [];
    for (var i = 0; i < edades.length; i++) {
        if (edades[i] >= 60) {
            edadesMayores60.push(edades[i]);
        }
    }
    return edadesMayores60.length;
}

//cantidad menores de 18
function edadesMenores18(edades) {
    var edadesMenores18 = [];
    for (var i = 0; i < edades.length; i++) {
        if (edades[i] < 18) {
            edadesMenores18.push(edades[i]);
        }
    }
    return edadesMenores18.length;
}

//edad mas baja
function edadMasBaja(edades) {
    var edadMasBaja = edades[0];
    for (var i = 0; i < edades.length; i++) {
        if (edades[i] < edadMasBaja) {
            edadMasBaja = edades[i];
        }
    }
    return edadMasBaja;
}


//edad mas alta
function edadMasAlta(edades) {
    var edadMasAlta = 0;
    for (var i = 0; i < edades.length; i++) {
        if (edades[i] > edadMasAlta) {
            edadMasAlta = edades[i];
        }
    }
    return edadMasAlta;
}



//create a function to determine the average age
function edadesMedia(edades) {
    var edadesMedia = 0;
    for (var i = 0; i < edades.length; i++) {
        edadesMedia += edades[i];
    }
    return edadesMedia / edades.length;
}
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
    return edadesMayores18;
}

//create a function to determine the ages above 60
function edadesMayores60(edades) {
    var edadesMayores60 = [];
    for (var i = 0; i < edades.length; i++) {
        if (edades[i] >= 60) {
            edadesMayores60.push(edades[i]);
        }
    }
    return edadesMayores60;
}

//create a function to determine the minimum age
function edadesMinimas(edades) {
    var edadesMinimas = [];
    for (var i = 0; i < edades.length; i++) {
        if (edades[i] <= 18) {
            edadesMinimas.push(edades[i]);
        }
    }
    return edadesMinimas;
}       

//create a function to determine the maximum age
function edadesMaximas(edades) {
    var edadesMaximas = [];
    for (var i = 0; i < edades.length; i++) {
        if (edades[i] >= 60) {
            edadesMaximas.push(edades[i]);
        }
    }
    return edadesMaximas;
}

//create a function to determine the average age
function edadesMedia(edades) {
    var edadesMedia = 0;
    for (var i = 0; i < edades.length; i++) {
        edadesMedia += edades[i];
    }
    return edadesMedia / edades.length;
}








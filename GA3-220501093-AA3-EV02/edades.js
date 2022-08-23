var edades = [];
var conteo = 0;
//create a function to determine the ages above 18
function edadesMayores18(edades) {
  var edadesMayores18 = [];
  for (var i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      edadesMayores18.push(edades[i]);
    }
  }
  var conteo = edadesMayores18.length;
  console.log(conteo);
  document.getElementById("18+").value = conteo;

}

//create a function to determine the ages above 60
function edadesMayores60(edades) {
  var edadesMayores60 = [];
  for (var i = 0; i < edades.length; i++) {
    if (edades[i] >= 60) {
      edadesMayores60.push(edades[i]);
    }
  }
  conteo = edadesMayores60.length;
  console.log(conteo);
  document.getElementById("60+").value = conteo;
}

//cantidad menores de 18
function edadesMenores18(edades) {
  var edadesMenores18 = [];
  for (var i = 0; i < edades.length; i++) {
    if (edades[i] < 18) {
      edadesMenores18.push(edades[i]);
    }
  }
  conteo = edadesMenores18.length;
  console.log(conteo);
  document.getElementById("18-").value = conteo;
}

//edad mas baja
function edadMasBaja(edades) {
  var edadMasBaja = edades[0];
  for (var i = 0; i < edades.length; i++) {
    if (edades[i] < edadMasBaja) {
      edadMasBaja = edades[i];
    }
  }
  conteo = edadMasBaja;
  console.log(conteo);
  document.getElementById("menor").value = conteo;
}


//edad mas alta
function edadMasAlta(edades) {
  var edadMasAlta = 0;
  for (var i = 0; i < edades.length; i++) {
    if (edades[i] > edadMasAlta) {
      edadMasAlta = edades[i];
    }
  }
  conteo = edadMasAlta;
  console.log(conteo);
  document.getElementById("mayor").value = conteo;
}



//create a function to determine the average age
function edadesMedia(edades) {
  var edadesMedia = 0;
  for (var i = 0; i < edades.length; i++) {
    edadesMedia += edades[i];
  }
  conteo = edadesMedia / edades.length;
  console.log(conteo);
  document.getElementById("promedio").value = conteo;
}

function resultado() {
  console.log("Hola Mundo " + edadesMayores18(edades));
  /* document.getElementById("18+").value = edadesMayores18(edades); */
}


function ages() {
  let age = document.getElementById("age").value;
  document.getElementById("age").value = "";
  conteo = edades.length;
  if (age > 0 && age <= 120) {
    if (edades.length < 9) {
      edades.push(parseFloat(age));
      console.log(edades);
      document.getElementById("age").placeholder = "Ingresaste " + (conteo+1) + " edades";
    }
    else if (edades.length < 10){
      edades.push(parseFloat(age));
      console.log(edades);
      alert("La lista se encuentra llena");
      document.getElementById("age").placeholder = "Lleno";
      document.getElementById("calculos").hidden = false;
      edadesMayores18(edades);
      edadesMayores60(edades);
      edadesMenores18(edades);
      edadMasBaja(edades);
      edadMasAlta(edades);
      edadesMedia(edades);

    }
    else {
      alert("La lista se encuentra llena");
      document.getElementById("calculos").hidden = false;
    }
  }
  else {
    alert("Ingrese una edad mayor a 0 y menor a 120");
  }
}



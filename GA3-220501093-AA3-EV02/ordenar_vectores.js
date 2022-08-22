var vector_1 = [];
var vector_2 = [];

var cont = 0;
function valoresV1() {
    var v1 = document.getElementById("v1");
    var ingresoV1 = v1.value;
    v1.value = ""; /* Limpiar casilla */
    if (vector_1.length < 5) {
        if (ingresoV1 < vector_1[vector_1.length - 1]) {
            alert("El valor ingresado es menor al anterior, porfavor ingrese un numero mayor");
        }
        else {

            vector_1.push(parseFloat(ingresoV1));
            console.log(vector_1);
            console.log(vector_1[vector_1.length - 1]);
            v1.placeholder = "Ingrese un valor mayor a " + vector_1[vector_1.length - 1];
            cont = cont + 1;
            document.getElementById("lblV1").innerHTML = "Valores ingresados: " + cont;
        }
    }
    else {
        alert("la lista se encuentra llena");
        v1.placeholder = "Esta lista se encuentra llena";
    }
    if (cont == 5) {
        alert("la lista se encuentra llena");
        v1.placeholder = "Esta lista se encuentra llena";
        cont = 0;
    }
    console.log(cont);
}

var cont2 = 0;
function valoresV2() {
    var v2 = document.getElementById("v2");
    var ingresoV2 = v2.value;
    v2.value = ""; /* Limpiar casilla */
    if (vector_2.length < 5) {
        if (ingresoV2 < vector_2[vector_2.length - 1]) {
            alert("El valor ingresado es menor al anterior, por favor ingrese un valor mayor");
        }
        else {
            vector_2.push(parseFloat(ingresoV2));
            console.log(vector_2);
            console.log(vector_2[vector_2.length - 1]);
            v2.placeholder = "Ingrese un valor mayor a " + vector_2[vector_2.length - 1];
            cont2 = cont2 + 1;
            document.getElementById("lblV2").innerHTML = "Valores ingresados: " + cont2;
        }
    }
    else {
        alert("la lista se encuentra llena");
        v2.placeholder = "Esta lista se encuentra llnea";
    }
    if (cont2 == 5) {
        alert("la lista se encuentra llena");
        v2.placeholder = "Esta lista se encuentra llnea";
        cont2 = 0;
    }
    console.log(cont2);
}


function consolaVectores() {
    console.log(vector_1);
    console.log(vector_2);
}

function vectorOrdenado() {
    var vector_4 = vector_1.concat(vector_2);
    vector_4.sort((a, b) => a - b);
    let list = document.getElementById("v4");
    vector_4.forEach((item => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    }));
}
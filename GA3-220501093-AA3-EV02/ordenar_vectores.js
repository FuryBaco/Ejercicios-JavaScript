var vector_1 = [];
var vector_2 = [];

function valoresV1() {
    var ingresoV1 = document.getElementById("v1").value;
    document.getElementById("v1").value = ""; /* Limpiar casilla */
    if (vector_1.length < 5) {
        if (ingresoV1 < vector_1[vector_1.length - 1]) {
            alert("El valor ingresado es menor al anterior, porfavor ingrese un numero mayor");
        }
        else {

            vector_1.push(parseFloat(ingresoV1));
            console.log(vector_1);
            console.log(vector_1[vector_1.length - 1]);
        }
    }

    else {
        alert("la lista se encuentra llena");
    }
}


function valoresV2() {
    var ingresoV2 = document.getElementById("v2").value;
    document.getElementById("v2").value = ""; /* Limpiar casilla */
    if (vector_2.length < 5) {
        if (ingresoV2 < vector_2[vector_2.length - 1]) {
            alert("El valor ingresado es menor al anterior, por favor ingrese un valor mayor");
        }
        else {
            vector_2.push(parseFloat(ingresoV2));
            console.log(vector_2)
        }
    }
    else {
        alert("la lista se encuentra llena");
    }
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
fullform = [];

function handleFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries()); // for multi-selects, we need special handling

    /* formJSON.snacks = data.getAll('snacks'); */


    /* var person = JSON.stringify(formJSON, null, 2); */
    var person = formJSON;
    fullform.push(person);
    /* let a = typeof fullform;
    console.log(a); */
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(fullform, null, 2);

    fullform.forEach((element) => {
        for (var key in element) {
            if (element.hasOwnProperty(key)) {
                console.log(key + ':' + element[key]);
            }
        }
    });
    /* for (let i = 0; i < fullform.length; i++) {
      for (let j in fullform[i]) {
        console.log(j);
        document.write(j + ": " + fullform[i][j] + "<br>");
      }
    } */
    /* console.log(JSON.stringify(obj)); */
    /* console.log(fullform[0]["name"]); */
    event.target.reset()
}

function search() {
    let idx = document.getElementById("buscar").value;
    document.getElementById("nombre").value = fullform[idx]["nombre"];
    document.getElementById("cedula").value = fullform[idx]["cedula"];
    document.getElementById("fnacimiento").value = fullform[idx]["fnacimiento"];
    document.getElementById("email").value = fullform[idx]["email"];
    document.getElementById("ciudadR").value = fullform[idx]["ciudadR"];
    document.getElementById("ciudadO").value = fullform[idx]["ciudadO"];
    document.getElementById("artista1").value = fullform[idx]["artista1"];
    document.getElementById("cancion1").value = fullform[idx]["cancion1"];
    document.getElementById("artista2").value = fullform[idx]["artista2"];
    document.getElementById("cancion2").value = fullform[idx]["cancion2"];
    document.getElementById("artista3").value = fullform[idx]["artista3"];
    document.getElementById("cancion3").value = fullform[idx]["cancion3"];
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
function rectanguloAP() {
  let base = parseInt(document.getElementById("base").value);
  let altura = parseInt(document.getElementById("altura").value);
  let area = base * altura;
  let perimetro = 2 * (base + altura)
  document.getElementById("respuestaAreaR").value = "Area = " + area.toFixed(2);
  document.getElementById("respuestaPerimetroR").value = "Peri = " + perimetro.toFixed(2);
}

function trianguloAP() {
  let a = parseFloat(document.getElementById("at").value);
  let b = parseFloat(document.getElementById("ct").value);
  let anguloc = parseFloat(document.getElementById("angulobt").value);
  var area = (a * b * Math.sin(anguloc)) / 2;
  var c = a + b + Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(anguloc));
  var perimetro = a + b + c;
  document.getElementById("respuestaAreaT").value = "Area = " + area.toFixed(2);
  document.getElementById("respuestaPerimetroT").value = "Peri = " + perimetro.toFixed(2);
}

function circuloAP() {
  let radio = parseInt(document.getElementById("radio").value);
  let area = Math.PI * radio * radio;
  let perimetro = 2 * (Math.PI * radio);
  document.getElementById("respuestaAreaC").value = "Area = " + area.toFixed(2);
  document.getElementById("respuestaPerimetroC").value = "Peri = " + perimetro.toFixed(2);
}

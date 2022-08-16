function rectanguloAP() {
  let base = parseInt(document.getElementById("base").value);
  let altura = parseInt(document.getElementById("altura").value);
  let area = base * altura;
  let perimetro = 2 * (base + altura)
  document.getElementById("respuestaAreaR").value = "Area = " + area.toFixed(2);
  document.getElementById("respuestaPerimetroR").value = "Peri = " + perimetro.toFixed(2);
}

function trianguloAP() {
  let at = parseFloat(document.getElementById("at").value);
  let ct = parseFloat(document.getElementById("ct").value);
  let angulobt = parseFloat(document.getElementById("angulobt").value);
  var area = (at * ct * Math.sin(angulobt * (Math.PI/180))) / 2; //formula de Heron
  var bt = Math.sqrt(at * at + ct * ct - 2 * at * ct * Math.cos(angulobt * (Math.PI/180)));
  var perimetro = at + bt + ct;
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

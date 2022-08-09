//create function to calculate area and perimeter of a rectangle
function rAreaPerimeter(width, height) {
    var area = width * height;
    var perimeter = 2 * (width + height);
    return [area, perimeter];
}



//create a function to calculate the area and perimeter of a triangle
function tAreaPerimeter() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let anguloc = parseFloat(document.getElementById("anguloc").value);
    var area = (a * b * Math.sin(anguloc)) / 2;
    var c = a + b + Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(anguloc));
    var perimeter = a + b + c;
    document.getElementById("area").innerHTML = "El area del triangulo es: "+ area;
    document.getElementById("perimeter").innerHTML = `El perimetro del triangulo es: ${perimeter}`;
}


//create a function to calculate the area and perimeter of a circle
function cAreaPerimeter(radius) {
    var area = Math.PI * radius * radius;
    var perimeter = 2 * Math.PI * radius;
    return [area, perimeter];
}
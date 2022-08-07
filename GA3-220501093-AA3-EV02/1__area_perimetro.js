//create function to calculate area and perimeter of a rectangle
function areaPerimeterRectangle(width, height) {
    var area = width * height;
    var perimeter = 2 * (width + height);
    return [area, perimeter];
}

//create a function to calculate the area and perimeter of a triangle
function areaPerimeterTriangle(base, height) {
    var area = base * height / 2;
    var perimeter = base + height + Math.sqrt(base * base + height * height);
    return [area, perimeter];
}

//create a function to calculate the area and perimeter of a circle
function areaPerimeterCircle(radius) {
    var area = Math.PI * radius * radius;
    var perimeter = 2 * Math.PI * radius;
    return [area, perimeter];
}
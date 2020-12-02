

var input = require("fs").readFileSync("stdin1043.txt", "utf8");


var valores = input.split(" ");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());
var triangulo;
var trapezio;


triangulo = A + B + C;
trapezio = ((A + B) * C) / 2;

if (((B + C) > A) && ((A + C) > B) && ((A + B) > C)) {

    console.log("Perimetro = " + triangulo.toFixed(1));
}
else{
    console.log("Area = " + trapezio.toFixed(1));
}




var input = require("fs").readFileSync("stdin1002.txt", "utf8");



var valorraio = input.split("\n"); // \n separa as strings pela quebra de linha

var raio = parseFloat(valorraio.shift()); // retorna valor digitado e transforma em Float
var n = 3.14159;
var area;

area = Math.pow(raio, 2) * n;

console.log("A=" + area.toFixed(4));
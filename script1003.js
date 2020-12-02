
var input = require("fs").readFileSync("stdin1003.txt", "utf8");



var valores = input.split("\n"); // \n separa as strings pela quebra de linha

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var SOMA;

SOMA = A + B;

console.log("SOMA = "+ SOMA);

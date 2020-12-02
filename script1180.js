
var input = require("fs").readFileSync("stdin1180.txt", "utf8");


var menorposicao = input.split("\n");
var N = menorposicao.shift();
var stringNumeros = menorposicao.shift().toString().split(" ");
var arrayNumeros = [];

if (N > 1 && N < 1000){
for (var i = 0; i < N; i++){
    var numeros = stringNumeros[i]; 
    arrayNumeros.push(numeros);
}


var maior = Math.min.apply(null, arrayNumeros).toString();

var posicao = arrayNumeros.indexOf(maior); 

console.log("Menor valor: " + parseInt(maior));
console.log("Posicao: " + posicao);


}

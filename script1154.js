
var input = require("fs").readFileSync("stdin1154.txt", "utf8");


var idades = input.split("\n");

const output = {
    soma: 0.00,
    qnt: 0,

};



for (var i = 0; i < idades.length; i++) {
    const numeros = parseInt(idades[i]);
    if (idades[i] < 0){
    break;
    
    }
    
    output.soma += numeros;
    output.qnt = i + 1;    
}

console.log((output.soma / output.qnt).toFixed(2));






var input = require("fs").readFileSync("stdin1035.txt", "utf8");



var selecao = input.split(" "); // 'espaço' separa as strings pela quebra de linha

var A = parseInt(selecao.shift());
var B = parseInt(selecao.shift());
var C = parseInt(selecao.shift());
var D = parseInt(selecao.shift());

if((B > C) && (D > A) && ((C + D) > (A + B)) && (C && D > 0) && (A % 2 == 0)){
    console.log("Valores aceitos");
}
    else{
        console.log("Valores nao aceitos")
    }





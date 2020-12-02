
var input = require("fs").readFileSync("stdin1042.txt", "utf8");


var coordenadas = input.split(" ");
var entrada = input.split(" ");
var coord = [];
var ent = [];

// for para trazer os valores do arrey para um novo arrey(Int)
for (var i = 0; i < 3; i++){
    coord[i] = parseInt(coordenadas.shift());
}

/* for para trazer os valores do arrey para um novo arrey(Int)
 (outro arrey pois esse é sem ordenação)*/
for (var i = 0; i < 3; i++){
    ent[i] = parseInt(entrada.shift());
}

//função para ordernar em ordem crescente
function ordenar(a, b){
    return (a - b);
}

//ordenando com sort o arrey int e usando a function "ordenar"
coord.sort(ordenar);

//mostrando os valores ordenados e separados por quebra de linha
console.log(coord.join("\n"));

//pular uma linha
console.log();

//mostrando os valores como foram enviados
console.log(ent.join("\n"));



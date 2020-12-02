const { CONNREFUSED } = require("dns");
const { write } = require("fs");

var input = require("fs").readFileSync("stdin1534.txt", "utf8"); //buscando valores do arquivo de testes

var matriz = input.split("\n");


for (var i = 0; i < matriz.length; i++){     //linhas
      const A = parseInt(matriz.shift());
  for (j = 0; j < A; j++){
    console.log("1"); 
    console.log("2");
   
}

}



var input = require("fs").readFileSync("stdin1564.txt", "utf8"); //buscando valores do arquivo de testes
var reclamacoes = input.split("\n");


for (var i = 0; i < reclamacoes.length; i++){
    const qnt = parseInt(reclamacoes[i]);

    if (qnt == 0){
        console.log("vai ter copa!");
    }
    else if(qnt >= 0 && qnt <= 100){
        console.log("vai ter duas!");
    }

}






var input = require("fs").readFileSync("stdin1094.txt", "utf8"); //buscando valores do arquivo de testes


var experiencias = input.split("\n"); //buscando valores do arquivo de teste para array 'experiencias'
var N = parseInt(experiencias.shift()); //buscando primeiro número do array, que determina a quantidade de experiencias feitas

const output = { //criação de um objeto para salvar valores
    totalCobaias: 0,
    totalCoelhos: 0,
    totalRatos: 0,
    totalSapos: 0,
    percentualCoelhos: 0.0,
    percentualRatos: 0.00,
    percentualSapos: 0.00,
};

for (var i = 0; i < N; i++){ //busca nos valores do array
    const qnt = parseInt(experiencias[i].match(/[0-9]+/g)); //buscar só os valores
    const animal = experiencias[i].match(/[A-Z]/g)[0]; //buscar só as letras


if (animal == 'C'){
    output.totalCoelhos += qnt; //add valores animal = 'C' em totalCoelhos | output.totalCoelhos = output.totalCoelhos + qnt 
}
else{
    if (animal == 'R'){
        output.totalRatos += qnt;
    }
    else{
        if (animal == 'S'){
            output.totalSapos += qnt;
        }
    }
}

output.totalCobaias += qnt;//somando todas as quantidades recebidas

}//fechando for

// calculos percentuais
output.percentualCoelhos = ((output.totalCoelhos / output.totalCobaias) * 100).toFixed(2);

output.percentualRatos = ((output.totalRatos / output.totalCobaias) * 100).toFixed(2);

output.percentualSapos = ((output.totalSapos / output.totalCobaias) * 100).toFixed(2);


console.log('Total: ' + output.totalCobaias + ' cobaias');
console.log('Total de coelhos: ' + output.totalCoelhos);
console.log('Total de ratos: ' + output.totalRatos);
console.log('Total de sapos: ' + output.totalSapos);
console.log('Percentual de coelhos: ' + output.percentualCoelhos + ' %');
console.log('Percentual de ratos: ' + output.percentualRatos + ' %');
console.log('Percentual de sapos: ' + output.percentualSapos + ' %');



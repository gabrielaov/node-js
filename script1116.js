
var input = require("fs").readFileSync("stdin1116.txt", "utf8");


var divisoes = input.split("\n");
var N = parseInt(divisoes.shift());


for (var i = 0; i < N; i++){
    const A = parseInt(divisoes[i].substring(2 , -1)); //retira ultima palavra e mostra primeiros 2 caract.
    const B = parseInt(divisoes[i].substring(2)); //retira primeiros 2 caract.


    if (B == 0){
        console.log("divisao impossivel");
    }
    else{
        console.log((A / B).toFixed(1));
    }


    
}//fecha for



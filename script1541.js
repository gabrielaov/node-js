
var input = require("fs").readFileSync("stdin1541.txt", "utf8");


var casas = input.split("\n");


for (var i = 0; i < casas.length; i++){
    const valores = casas[i].split(" ");
    if (casas[i] === 0){
        break;
    }
    const A = parseInt(valores.shift());
    const B = parseInt(valores.shift());
    const C = parseInt(valores.shift());
    
    if ((A > 0 && A <= 1000) && (B > 0 && B <= 1000) && (C > 0 && C <= 1000)){
        const metroQuadrado = (A * B) / (C / 100);
        const lado = Math.sqrt(metroQuadrado);

        console.log(Math.trunc(lado));


    }

}


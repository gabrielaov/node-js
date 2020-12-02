

var input = require("fs").readFileSync("stdin1040.txt", "utf8");

var notas = input.split("\n");

var arrayNotas = notas.toString().split(" ");

var N1 = parseFloat(arrayNotas.shift()).toFixed(1);
var N2 = parseFloat(arrayNotas.shift()).toFixed(1);
var N3 = parseFloat(arrayNotas.shift()).toFixed(1);
var N4 = parseFloat(arrayNotas.shift()).toFixed(1);
var media;

media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;

console.log("Media: " + media.toFixed(1));

if (media >= 7){
    console.log("Aluno aprovado.");
}
else if(media < 5){
    console.log("Aluno reprovado.");
}
else if(media >= 5 && media <= 6.9) {
    console.log("Aluno em exame.");

    const N_exame = parseFloat(notas.pop());
    console.log("Nota do exame: " + N_exame.toFixed(1));

    const media2 = (media + N_exame) / 2;

    if(media2 >= 5){
        console.log("Aluno aprovado.");
        
    }
    else if(media2 <= 4.9){
        console.log("Aluno reprovado.");
    }

    console.log("Media final: " + media2.toFixed(1));
}

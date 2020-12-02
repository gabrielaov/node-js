
var input = require("fs").readFileSync("stdin1019.txt", "utf8");



var seg = input.split("\n"); // \n separa as strings pela quebra de linha

var segundos = parseInt(seg.shift());
var hora;
var minuto;
var segundo;

if (segundos >= 3600){
    hora = segundos / 3600;
}

else{
    hora = "0";
}


if ((segundos % 3600) > 1){
    minuto = (segundos % 3600) / 60;
}
else{
    if(segundos < 3600 || segundos >= 60){
        minuto = segundos / 60;
    }
}


if (minuto < 60){
    segundo = segundos % 60;
}
else{
    segundo = "0";
}


console.log(Math.trunc(hora) + ":" + Math.trunc(minuto) + ":" + segundo);






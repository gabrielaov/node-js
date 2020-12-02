

var input = require("fs").readFileSync("stdin1041.txt", "utf8");


var coordenadas = input.split(" ");

var X = parseFloat(coordenadas.shift());
var Y = parseFloat(coordenadas.shift());


if(X > 0 && Y > 0){
    console.log("Q1");
}
else{
    if(X < 0 && Y > 0){
        console.log("Q2");
    }
    else{
        if(X < 0 && Y < 0){
            console.log("Q3");
        }
        else{
            if(X > 0 && Y < 0){
                console.log("Q4");
            }
        }
    }
}

if(X === 0 && Y !== 0){
    console.log("Eixo Y");
}
else{
    if(Y === 0 && X !== 0){
        console.log("Eixo X");
    }
    else{
        if(X === 0 && Y === 0){
            console.log("Origem");
        }
    }
}




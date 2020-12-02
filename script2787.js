const { parse } = require("path");

var input = require("fs").readFileSync("stdin2787.txt", "utf8");


var xadrez = input.split("\n");

var L = parseInt(xadrez.shift());
var C = parseInt(xadrez.shift());

if ((L && C) >= 1 && (L && C) <= 1000){
    if(((L + C) % 2) == 0){
        console.log(1);
    }
    else if (((L + C) % 2) != 0){
        console.log(0);

    }
}
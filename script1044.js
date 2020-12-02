const { parse } = require("path");


var input = require("fs").readFileSync("stdin1044.txt", "utf8");


var multiplos = input.split(" ");

var A = parseInt(multiplos.shift());
var B = parseInt(multiplos.shift());

if ((A % B) === 0 ||
    (B % A) === 0) {
        console.log("Sao Multiplos");
}
else{
    console.log("Nao sao Multiplos");
}

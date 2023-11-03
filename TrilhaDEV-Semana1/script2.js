var prompt = require("prompt-sync")();

var idade = prompt("Digite sua Idade: ");


if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
var prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

if (numero % 2 == 0) {
    alert("Este é um número PAR!");
} else {
    alert("Este é um número IMPAR!");
}
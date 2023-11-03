var prompt = require("prompt-sync")();


var username = "123";
var password = "123";

var username = prompt("Digite seu usuario: ");
var password = prompt("Digite sua senha: ");

if (username == "123" && password == "123") {
    console.log("Usuário autenticado");
} else {
    console.log("Login e/ou senha incorrretos");
}

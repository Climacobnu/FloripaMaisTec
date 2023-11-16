
function exibirNome() {
    let elemento_meu_nome;
    elemento_meu_nome = document.getElementById("meu_nome");
    // elemento_meu_nome.innerText = "Leandro"
    elemento_meu_nome.innerHTML = "<h2>Leandro</h2>"
    elemento_meu_nome.style.color = "blue"

}
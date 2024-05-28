function preencherContrato() {
    var nome = document.getElementById("nome").value;
    var rg = document.getElementById("rg").value;
    var cpf = document.getElementById("cpf").value;
    var profissao = document.getElementById("profissao").value;
    var endereco = document.getElementById("endereco").value;

    document.getElementById("nomeSpan").innerText = nome;
    document.getElementById("rgSpan").innerText = rg;
    document.getElementById("cpfSpan").innerText = cpf;
    document.getElementById("profissaoSpan").innerText = profissao;
    document.getElementById("enderecoSpan").innerText = endereco;
}
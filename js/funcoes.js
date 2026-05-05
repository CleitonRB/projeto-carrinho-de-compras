/*
function adicionar(produto) {
    const qtd = document.getElementById("qtd_" + produto)
    const valor = document.getElementById("valor_" + produto)
    const total = document.getElementById("total_" + produto)

    qtd.innerHTML = parseInt(qtd.innerHTML) + 1
    const resultado = qtd.innerHTML * valor.innerHTML

    total.innerHTML = resultado
}

function retirar(produto) {
    const qtd = document.getElementById("qtd_" + produto)
    const valor = document.getElementById("valor_" + produto)
    const total = document.getElementById("total_" + produto)

    qtd.innerHTML = parseInt(qtd.innerHTML) - 1
    const resultado = qtd.innerHTML * valor.innerHTML

    total.innerHTML = resultado
}
*/

function alterarQtd(produto, acao) {
    const qtd = document.getElementById("qtd_" + produto)
    const valor = document.getElementById("valor_" + produto)
    const total = document.getElementById("total_" + produto)

    if (acao == "-" && qtd.innerHTML == 0) {
        alert("ATENÇÃO: Valor não pode ser menor que zero!")
    } else {
        acao == "+" ? qtd.innerHTML++ : qtd.innerHTML--
        const resultado = qtd.innerHTML * valor.innerHTML
        total.innerHTML = resultado
        soma()
    }
}

function soma() {
    let soma = 0
    
    /*
    soma = soma + parseInt(document.getElementById('total_1').innerHTML)
    soma = soma + parseInt(document.getElementById('total_2').innerHTML)
    soma = soma + parseInt(document.getElementById('total_3').innerHTML)
    */

    for (let i = 1; i < 4; i++) {
        soma = soma + parseInt(document.getElementById('total_' + i).innerHTML)
    }

    document.getElementById('subTotal').innerHTML = soma
}
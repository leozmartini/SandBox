let disponivelInferior = document.getElementById('qtd-inferior').textContent
let disponivelSuperior = document.getElementById('qtd-superior').textContent
let disponivelPista = document.getElementById('qtd-pista').textContent

function comprar() {
    let select = document.getElementById('tipo-ingresso');
    let tipoIngresso = select.options[select.selectedIndex].value;

    let quantidade = Number(document.getElementById('qtd').value)
    if (quantidade == '') quantidade = 1;


    if(!Number.isInteger(quantidade)) return alert('A quantidade deve ser um número inteiro.')

    if (tipoIngresso == 'inferior') {
        if (disponivelInferior - quantidade < 0) return alert('Esgotados');
        alert(`Compra de ${quantidade} ingresso(s) efetuada.`)

        disponivelInferior -= quantidade; document.getElementById('qtd-inferior').textContent = disponivelInferior
    }

    if (tipoIngresso == 'superior') {
        if (disponivelSuperior - quantidade < 0) return alert('Esgotados');
        alert(`Compra de ${quantidade} ingresso(s) efetuada.`)

        disponivelSuperior -= quantidade; document.getElementById('qtd-superior').textContent = disponivelSuperior
    }

    if (tipoIngresso == 'pista') {
        if (disponivelPista - quantidade < 0) return alert('Esgotados');
        alert(`Compra de ${quantidade} ingresso(s) efetuada.`)

        disponivelPista -= quantidade; document.getElementById('qtd-pista').textContent = disponivelPista
    }


}
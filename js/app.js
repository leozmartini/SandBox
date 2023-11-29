let disponivelInferior = document.getElementById('qtd-inferior').textContent
let disponivelSuperior = document.getElementById('qtd-superior').textContent
let disponivelPista = document.getElementById('qtd-pista').textContent

function comprar() {
    let select = document.getElementById('tipo-ingresso');
    let tipoIngresso = select.options[select.selectedIndex].value;

    let quantidade = document.getElementById('qtd').value
    if (quantidade == '') quantidade = 1


    if (tipoIngresso == 'inferior') {
        if (disponivelInferior - quantidade < 0) return alert('Esgotados');

        disponivelInferior -= quantidade; document.getElementById('qtd-inferior').textContent = disponivelInferior
    }

    if (tipoIngresso == 'superior') {
        if (disponivelSuperior - quantidade < 0) return alert('Esgotados');

        disponivelSuperior -= quantidade; document.getElementById('qtd-superior').textContent = disponivelSuperior
    }

    if (tipoIngresso == 'pista') {
        if (disponivelPista - quantidade < 0) return alert('Esgotados');

        disponivelPista -= quantidade; document.getElementById('qtd-pista').textContent = disponivelPista
    }


}
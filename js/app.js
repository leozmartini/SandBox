// contantes do HTML
const totalElement = document.getElementById('valor-total');
const produtosCarrinho = document.getElementById('lista-produtos');
const total = document.getElementById('valor-total')

const produtoElement = document.getElementById('produto')
let produto




// Valor inicial do carrinho
let valorTotal = parseInt(totalElement.textContent.split('R$')[1])

function adicionar() {
  // Armazena option selecionada
  produto = produtoElement.options[produtoElement.selectedIndex].value;

  // Busca dados dos produtos
  let nomeProduto = produto.split('-')[0]
  let precoUnitario = produto.split('R$')[1]
  let qtde = document.getElementById('quantidade').value;
  if (!qtde) qtde = 1

  // Calcula valor a pagar por preço * quantidade
  let valorPagar = parseInt(precoUnitario * qtde)

  // Insere no carrinho texto do produto
  produtosCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtde}x</span> ${nomeProduto} <span class="texto-azul">R$${valorPagar}</span>
  </section>`

  // Calcula novo valor do carrinho
  valorTotal += valorPagar
  totalElement.textContent = `${valorTotal}`

  // Limpa quantidade
  document.getElementById('quantidade').value = null

}

function limpar() {
  valorTotal = 0
  produtosCarrinho.textContent = '' // Limpa produtos
  total.textContent = 'R$00,00' // limpa preço
}
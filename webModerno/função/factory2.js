// criarProduto,  passar o nome do produto, preço
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  };
};

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('Kindle', 1199.49));
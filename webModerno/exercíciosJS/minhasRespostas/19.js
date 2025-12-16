/*
​O cardápio de uma lanchonete é o seguinte: 

Código    Descrição do Produto        Preço 
100         Cachorro-Quente         R$ 3,00 
200       Hambúrguer Simples        R$ 4,00 
300        Cheeseburguer            R$ 5,50 
400            Bauru                R$ 7,50 
500          Refrigerante           R$ 3,50 
600              Suco               R$ 2,80 
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente.
*/

function cardapio(codigo, quant) {
  switch (codigo) {
    case 100:
      return `Você consumiu ${quant}. Pague R$${quant * 3}`;
    case 200:
      return `Você consumiu ${quant}. Pague R$${quant * 4}`;
    case 300:
      return `Você consumiu ${quant}. Pague R$${quant * 5.5}`;
    case 400:
      return `Você consumiu ${quant}. Pague R$${quant * 7.5}`;
    case 500:
      return `Você consumiu ${quant}. Pague R$${quant * 3.5}`;
    case 600:
      return `Você consumiu ${quant}. Pague R$${quant * 2.8}`;
    default:
      return `O produto não existe`;

  }
};

console.log(cardapio(100, 2));
console.log(cardapio(200, 3));
console.log(cardapio(300, 4));
console.log(cardapio(400, 1));
console.log(cardapio(500, 7));
console.log(cardapio(600, 3));
console.log(cardapio(700, 1));
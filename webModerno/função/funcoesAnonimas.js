const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a,b));
};

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
  return x - y;
}); // aqui temos três parâmetros, sendo o último uma função que ocupa multiplas linhas
imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  falar: function () {
    console.log('Opa')
  }
  // Mesma coisa que o de cima!!
  /*
    * falar() {
    *   console.log('Opa')
    * }
  */
};

pessoa.falar();

/* Função anônima
  * Função sem nome
  * 
  * 
*/
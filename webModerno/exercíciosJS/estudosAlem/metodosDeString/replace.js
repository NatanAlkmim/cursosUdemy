
/* .replace()
  * Usado para substituir partes de uma string por outra string
  * Recebe dois parâmetros. O valor a ser substituido e o valor pelo qual ele deve substituir
  * Retorna uma nova string com a substituição feita
  * se tiver mais de uma ocorrência, deve-se usar a expressão regular 'g'
*/

const texto1 = 'Olá, mundo!';
const novoTexto1 = texto1.replace('mundo', 'JavaScript');

console.log(texto1);
console.log(novoTexto1);

// exemplo substituindo todas as ocorrências
const texto2 = 'banana, maçã, banana';
const novoTexto2 = texto2.replace(/banana/g, 'laranja');

console.log(texto2)
console.log(novoTexto2);


// mais um exemplo...
const frase = 'Hoje é um bom dia!';

console.log(frase);
console.log(frase.replace("bom", "ótimo"));
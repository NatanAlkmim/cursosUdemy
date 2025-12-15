/* .toFixed()
  * Método que arredonda um número para um número específico de casas decimais
  * Retorna o resultado como uma string
  * Recebe um número que indica quantas casas decimais vpcê quer
*/
const numero1 = 3.14159;
console.log(numero1.toFixed(2));
console.log(numero1.toFixed(4));

// mais exemplos...

const n1= 3.14159;
const n2 = 5.6789;

console.log(n1.toFixed(2));
console.log(n2.toFixed(1));

/* .toString()
  * Método que converte qualquer objeto em uma string
  * qualquer valor (numeto, objeto, array) pode ser convertido em string
*/

const numero2 = 123;
const numeroString = numero1.toString();

console.log(typeof numero2);
console.log(numeroString);
console.log(typeof numeroString);

// mais exemplos...

const num = 42;
const bool = true;

console.log(num.toString());
console.log(bool.toString());

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
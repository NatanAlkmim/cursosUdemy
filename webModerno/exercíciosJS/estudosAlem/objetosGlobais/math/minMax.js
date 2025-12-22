// Math.max -> retorna o maior valor entre os argumentos passados
// Math.min -> retorna o menor valor entre os argumentos passados

/* Sintaxe
  * Math.max(a, b, c, ...)
  * Math.min(a, b, c, ...)
*/

// Não fucionam em arrays, pois recebem uma lista de números, não um array

// Exemplo:
const numeros = [10, 5, 20, 8];

const maior = Math.max(...numeros);
console.log(maior);

const menor = Math.min(...numeros);
console.log(menor);

// VER 
/* Set
  * Estrutura de dados que guarda valores únicos
  * Não aceita valores repetidos
  * Mesmo adicionando 'a' duas vezes, ele aparece apenas uma vez!
  * O Set remove automaticamente os valores repetidos
  * Apenas em strings!!
*/
const letras1 = new Set();
console.log(letras1); // Set(0) {}

const letras2 = new Set();

letras2.add('a');
letras2.add('b');
letras2.add('a'); // valor repetido

console.log(letras2) // Set(2) { 'a', 'b' }

// Criando um Set a partir de um array
const array = ['a', 'a', 'b'];

const conjunto = new Set(array);

console.log(conjunto); // Set(2) { 'a', 'b' }

/* Size
  * O Set não usa o .length (comprimento do array)
  * Ele pergunta quantos valores únicos existem dentro do Set
  * É impresso a soma da quantidade de valores únicos dentro de Set
*/

const numeros = new Set([1, 1, 2, 3, 3]);

console.log(numeros.size);

// Comparação com array(length)
const arr = [1, 1, 2, 3, 3];

console.log(arr.length); // Total de elementos
console.log(new Set(arr).size); // Total de valores únicos
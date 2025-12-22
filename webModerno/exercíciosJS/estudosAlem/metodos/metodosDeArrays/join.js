/*
  * Transforma todos os elementos de um array em uma única string
  * 
  * array.join(separador)
*/

// Exemplo

const frutas = ['maça', 'banana', 'laranja'];
let resultado = frutas.join();
console.log(resultado)

resultado = frutas.join(' - ');
console.log(resultado)

resultado = frutas.join('-');
console.log(resultado)

resultado = frutas.join(', ');
console.log(resultado)
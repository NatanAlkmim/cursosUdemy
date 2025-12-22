// O operador spread "..." espalha os elementos de um array como se fossem argumentos individuai
// Útil para objetos globais, como Math.max ou Math.min

// Exemplo com arrays
const numeros = [10, 5, 20, 8];

const maior = Math.max(...numeros);
console.log(maior);

const menor = Math.min(...numeros);
console.log(menor);

/* Basicamente "...numeros":
  * Transforma [10, 5, 20, 8] em 10, 5, 20, 8
*/

// Não se pode passar o array direto: Math.max([10, 5, 20])

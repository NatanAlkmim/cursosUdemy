/*
  Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
  ou false.
*/

/** Passos
 * Verificar se o numero é inteiro
 *  -> se não for, falar que ele não é um número inteiro
 * 
 * Se o número for / por 3
 *  -> retorna true
 * Se não for
 *  -> retorna false
 * 
 * Usar % 3 === 0
 */

function verificaDiv1(num) {
  const divPorTres = num % 3;

  if (num % 1 !== 0) {
    return `O número ${num} não é inteiro!!`;
  }

  if (divPorTres === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(verificaDiv1(3));
console.log(verificaDiv1(5.1));
console.log(verificaDiv1(3.1));
console.log(verificaDiv1(0));

// Mais Enxuto:

function verificaDiv2(num) {
  if (num % 1 !== 0) {
    return `O número ${num} não é inteiro!!`;
  }
  return num % 3 === 0;
}

console.log(verificaDiv2(3));    // true
console.log(verificaDiv2(5.1));  // "O número 5.1 não é inteiro!!"
console.log(verificaDiv2(3.1));  // "O número 3.1 não é inteiro!!"
console.log(verificaDiv2(0));    // true

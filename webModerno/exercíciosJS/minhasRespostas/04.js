/* Crie uma função que irá receber dois valores, o dividendo e o divisor.
  * A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/
function divisao1(a, b) {
  const resultado = a / b;
  const restoDivisao = a % b;

  return `O resultado é ${resultado} e o resto da divisão é ${restoDivisao}`;
};

console.log(divisao1(5, 2))


// Otro jeito de fazer
function divisao2(a, b) {
  return `O resultado é ${a / b} e o resto da divisão é ${a % b}`;
};

console.log(divisao2(3, 5));

//Outro jeito de fazer

let operação = (a, b) => `O resultado é ${a / b} e o resto da divisão é ${a % b}`;

console.log(operação(4, 2));
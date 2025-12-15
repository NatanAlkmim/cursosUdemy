/*
01)​ Crie uma função que passa dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.
*/
function num(a, b) {
  return {
    soma: (a + b),
    subtr: (a - b),
    multi: (a * b),
    div: (a / b)
  };
};

console.log(num(5, 1));
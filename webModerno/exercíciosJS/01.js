/*
01)​ Crie uma função que passa dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.
*/
function soma(a, b) {
  return {
    soma: (a + b),
    subtracao: (a - b),
    multi: (a * b),
    div: (a / b)
  }
}

console.log(soma(5, 1))
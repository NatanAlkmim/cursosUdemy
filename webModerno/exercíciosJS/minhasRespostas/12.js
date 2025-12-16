/*
Faça um algoritmo que calcule o fatorial de um número.
*/

/**
 * O fatorial de um número n (escrito como n!) é o produto de todos os números inteiros positivos de 1 até n.
 * criar variável para armazenar resultados do loop
 * 
*/

function fatorial(num) {
  if (num == 0) {
    return 1
  } else {
    return num * fatorial(num - 1);
  }
};

console.log(fatorial(3));
console.log(fatorial(5));
/*
  Um funcionário irá receber um aumento de acordo com o seu plano de 
  trabalho, de acordo com a tabela abaixo:  
  Plano  Aumento 
  A  10% 
  B  15% 
  C  20% 
  Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
  novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumento(salario, plano) {
  switch (plano) {
    case 'A':
      return `Seu salário antigo era: ${salario}. Seu salário atual é: ${salario * 1.1}`;
    case 'B':
      return `Seu salário antigo era: ${salario}. Seu salário atual é: ${salario * 1.15}`;
    case 'C':
      return `Seu salário antigo era: ${salario}. Seu salário atual é: ${salario * 1.2}`;
    default:
      return 'Plano inválido';
  }
};

console.log(aumento(1000, 'A'));
console.log(aumento(1000, 'B'));
console.log(aumento(1000, 'C'));
console.log(aumento(1000, 'D'));
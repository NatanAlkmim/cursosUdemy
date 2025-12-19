/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

/* Etapas
 * Todos os conveniados pagam 100 reais
 * pessoas < 10 = + 80 reais
 * pessoas > 10 e < 30 = + 50
 * pessoas > 30 e < 60 = + 95
 * pessoas > 60 = + 130
 */

function planoSaude1(idade) {
  const planoPadrao = 100;

  switch (true) {
    case idade < 10:
      return `O valor do seu plano é: R$${planoPadrao + 80},00.`;
    case idade >= 10 && idade <= 30:
      return `O valor do seu plano é: R$${planoPadrao + 50},00.`;
    case idade > 30 && idade <= 60:
      return `O valor do seu plano é: R$${planoPadrao + 95},00.`;
    default:
      return `O valor do seu plano é: R$${planoPadrao + 130},00.`;
  }
};

console.log(planoSaude1(5));
console.log(planoSaude1(20));
console.log(planoSaude1(50));
console.log(planoSaude1(60));


// De outra maneira:

function planoSaude2(idade) {
  const planoPadrao = 100;
  let adicional = 0;

  switch (true) {
    case idade < 10:
      adicional = 80;
      break;
    case idade <= 30:
      adicional = 50;
      break;
    case idade <= 60:
      adicional = 95;
      break;
    default:
      adicional = 130;
  }

  return `O valor do seu plano é: R$${planoPadrao + adicional},00.`;
};

console.log(planoSaude2(5));
console.log(planoSaude2(20));
console.log(planoSaude2(50));
console.log(planoSaude2(60));
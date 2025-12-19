/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

/* Function: anuidade
  * Parâmetro 1: mês (1 - janeiro)
  * Parâmetro 2: valor da anuidade
  * 
  * Requisito:
  *   -> Anuidade paga no mês de janeiro
  *   -> 5% ao mês de juros compostos
  * 
  * Return: Valor a ser pago para o respectivo mês escolhido
*/

const JUROS_MENSAL = 0.05;

function anuidade(mes, valor) {
  const mesesDeAtraso = mes - 1;
  
  const montante = valor * (1 + JUROS_MENSAL) ** mesesDeAtraso;

  return Math.round(montante * 100) / 100;
};

console.log(anuidade(2, 100));
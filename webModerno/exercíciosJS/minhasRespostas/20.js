/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

/* Programa
  * Receber um valor inteiro
  * Usar o menor número de cédulas
  *   -> Começar com a maior nota possível
  *
  * As cédulas disponíveis são: 100, 50, 10, 5 e 1
  * Mostrar apenas as notas que forem usadas
  * 
  * 
*/

/**
 * Eu posso jogar num loop e usar o resto da divisão para orbter a quantidade de notas,
 * logo, se o número for divisivel por 100, ele retorna um resto e esse resto será dividido por 50 e por ai vai, até restar 0
 */


function contagemCedulas1(valor) {
  const cedulas = [100, 50, 10, 5, 1]
  let texto = '';

  for (let cedula of cedulas) {
    if (valor >= cedula) {
      let quantidade = Math.floor(valor / cedula); // quantas cédulas cabem?

      if (quantidade > 0) {
      let notaOuNotas = quantidade === 1 ? 'nota' : 'notas'; // aqui diferencia singular de plural
      let realOuReais = cedula === 1 ? 'real' : 'reais'; // aqui diferencia singular de plural

      texto += `${quantidade} ${notaOuNotas} de ${cedula} ${realOuReais}, `;
      }

      valor = valor % cedula; // atualiza o valor restante
    }
  }

  return texto.slice(0, -2) + '.'; // retira a última vírgula e o espaço por um "."
};

console.log(contagemCedulas1(153));
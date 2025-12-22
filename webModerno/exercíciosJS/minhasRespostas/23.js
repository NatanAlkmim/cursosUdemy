/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

/* Function:
  * Parâmetro 1: código do aluno
  * Parâmetro 2: nota1, nota2, nota3
  * 
  * Calcular média ponderada ok
  * A maior nota tem peso 4 e as outras, 3
  * 
  * Mostrar
  *  -> código do aluno
  *  -> três notas
  *  -> média calculada
  *  -> Aprovado se média >= 5
  *  -> Reprovado se média < 5
*/

function mediaPonderada(notas) {
  let totalPonderado = 0;
  let somaPesos = 0,
    pesos = [];
  
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] === Math.max(...notas)) {
    pesos.push(4);
  } else {
    pesos.push(3);
  }

    totalPonderado += notas[i] * pesos[i];
    somaPesos += pesos[i];
  }
  
  return totalPonderado / somaPesos
};

function mensagem(codigo, notas) {
  let mensagem = '',
    media = mediaPonderada(notas),
    aprovadoReprovado = media >= 5 ? ' \nAPROVADO' : '\nREPROVADO';

  mensagem = `Código do aluno: ${codigo}.\nNotas: ${notas.join(', ')}.\nMédia: ${media}. ${aprovadoReprovado}`;

  return mensagem
}

console.log(mensagem(1234, [5, 8, 10]));

//...

console.log('\n');

//...

function mediaPonderada(notas) {
  let totalPonderado = 0;
  let somaPesos = 0;
  let pesos = [];
  let maiorNota = Math.max(...notas);

  for (let i = 0; i < notas.length; i++) {
    pesos.push(notas[i] === maiorNota ? 4 : 3);
    totalPonderado += notas[i] * pesos[i];
    somaPesos += pesos[i];
  }
  
  return totalPonderado / somaPesos;
};

function mensagem(codigo, notas) {
  let mensagem = '';
  let media = mediaPonderada(notas).toFixed(2);
  let aprovadoReprovado = media >= 5 ? ' \nAPROVADO' : '\nREPROVADO';

  mensagem = `Código do aluno: ${codigo}\nNotas: ${notas.join(', ')}\nMédia: ${media} ${aprovadoReprovado}`;

  return mensagem;
}

console.log(mensagem(1234, [3, 3, 4]));
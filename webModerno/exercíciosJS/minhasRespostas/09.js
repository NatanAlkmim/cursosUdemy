/*
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de 
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas 
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor 
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum 
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou 
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 
e o aluno será aprovado
*/

/*
  - Contruir uma função
  
  - Política de classificação:
    -> notas de 0 a 100
    -> notas < 40 = reprovação
    -> notas = 38, será aredondado para o próximo multiplo de 5
  
  - Regras de arredondamento:
    -> descobrir o próximo multiplo de 5 acima da nota
    -> nota - valor do multiplo de 5
    -> Se resultado da diminuição foir < 3 a nota é arredondada para cima
    -> Se for maior > 3, não arredonda
*/

function sistemaNotas1(nota1) {
  if (nota1 < 38) {
    return `Sua nota: ${nota1}. Você foi Reprovado.`;
  }

  const arredondar = (Math.ceil(nota1 / 5) * 5) - nota1;
  
  if (arredondar < 3) {
    return `Sua nota: ${Math.ceil(nota1 / 5) * 5}. Você foi Aprovado!!`
  } else {
    return `Sua nota: ${nota1}. Você foi Aprovado!!`
  }
};

console.log(sistemaNotas1(38));
console.log(sistemaNotas1(81));
console.log(sistemaNotas1(37));
console.log(sistemaNotas1(47));

// De outro jeito...

function arredondar(nota2) {
  const proximoMultiplo = Math.ceil(nota2 / 5) * 5;

  if (nota2 >= 38 && (proximoMultiplo - nota2) < 3) {
    return proximoMultiplo;
  } else {
    return nota2;
  }
};

function sistemaNotas2(nota2) {
  if (nota2 >= 38) {
    return `Sua nota: ${arredondar(nota2)}. Você foi Aprovado!`;
  } else {
    return `Sua nota: ${arredondar(nota2)}. Você foi Reprovado.`
  }
}

console.log(sistemaNotas2(38));
console.log(sistemaNotas2(81));
console.log(sistemaNotas2(37));
console.log(sistemaNotas2(47));
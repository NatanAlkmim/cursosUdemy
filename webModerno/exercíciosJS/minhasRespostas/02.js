/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo).
*/
function triangulo1(a, b, c) {
  if (a === b && b === c) {
    return `O triângulo com as medidas ${a}, ${b}, ${c} é Equilátero!`;
  } else if (
    a === b && a !== c ||
    a === c && a !== b ||
    b === c && b !== a
  ) {
    return `O triângulo com as medidas ${a}, ${b}, ${c} é Isósceles`;
  } else {
    return `O triângulo com as medidas ${a}, ${b}, ${c} é Escaleno`;
  };
};

console.log(triangulo1(5, 7, 5))

// Outra maneira de fazer
function triangulo2(a, b, c) {
  const valoresUnicos = new Set([a, b, c]);
  const frase = `O triângulo com as medidas ${a}, ${b}, ${c} é`;

  if (valoresUnicos.size === 1 ) {
    return frase + ' Equilátero!';
  } else if (valoresUnicos.size === 2) {
    return frase + ' Isósceles';
  } else {
    return frase + ' Escaleno';
  };
};

console.log(triangulo2(5, 7, 6));
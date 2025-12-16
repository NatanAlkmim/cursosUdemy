/*
​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, 
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
“Delta é negativo”.
*/

// Resposta
function segundoGrau1(a, b, c) {
  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return "Delta é negativo";
  }

  const raizDelta = Math.sqrt(delta);
  
  const x = [
    (-b + raizDelta) / (2 * a),
    (-b - raizDelta) / (2 * a)
  ]

  return x;
}

console.log(segundoGrau1(3, 12, 12));

// A mais e mais detalhado!!

function segundoGrau2(a, b, c) {
  if (a === 0) {
    return 'Não é uma função de 2° grau, pois a é igual a 0.';
  }

  const delta = b ** 2 - 4 * a * c;
  
  if (delta < 0) {
    return 'Delta é negativo';
  }

  if (delta === 0){
    const raiz = -b / (2 * a);
    return `Há apenas uma raíz real, x = ${raiz}`;
    
  }

  else {
    const x = [
      (-b + Math.sqrt(delta)) / (2 * a),
      (-b - Math.sqrt(delta)) / (2 * a)
    ];

    return `Existem duas raízes reais, x1 = ${x[0]} e x2 = ${x[1]}`;
  }
};

console.log(segundoGrau2(0, -5, 12));
console.log(segundoGrau2(3, 12, 12));
console.log(segundoGrau2(1, 20, -525));
// Média Aritmética
function mediaAritmetica(valores) {
  let valorSomado = 0;

  for (let i = 0; i < valores.length; i++) {
    valorSomado += valores[i];
  }

  return valorSomado / valores.length;
}

console.log(mediaAritmetica([5, 2, 3, 4]));

// Ou...

function mediaSimples(valores) {
  let valorSomado = 0

  for (let valor of valores) {
    valorSomado += valor
  }

  return valorSomado / valores.length;
}
console.log(mediaSimples([5, 2, 3, 4]));

//...

// Media Ponderada
/* Explicação breve:
  * Cada valor tem um peso
  * Valores mais importantes contam mais
*/

function mediaPonderada1(valores, peso) {
  let totalPonderado = 0;
  let somaPesos = 0;
  
  for (let i = 0; i < valores.length; i++) {
    totalPonderado += valores[i] * peso[i];
    somaPesos += peso[i];
  }

  return totalPonderado / somaPesos;
};

console.log(mediaPonderada1([5, 8, 10], [1, 2, 3]));
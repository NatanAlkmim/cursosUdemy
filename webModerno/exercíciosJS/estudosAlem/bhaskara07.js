// Fórmula
/**
  * ax ** 2 + bx + c = 0
  * É usada para resolver equações do 2° grau
  * a !== 0
  * b e c são números reais
*/

/* Calculando o delta e as raízes (x)
  * delta = b ** 2 - 4ac
  * delta < 0 -> não existem raízes reais
  * delta = 0 -> existe 1 raiz real
  * delta > 0 existem 2 raizes reais
  * x = (-b +- Math.sqrt(delta)) / 2a
 */

function segundoGrau(a, b, c) {
  if (a === 0) {
    return 'Não é uma função de 2° grau, pois a é igual a 0';
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

console.log(segundoGrau(0, -5, 12));
console.log(segundoGrau(3, 12, 12));
console.log(segundoGrau(1, 20, -525));
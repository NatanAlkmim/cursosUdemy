// Juros simples

/* Primeira fórmula (Juros)
  * J = C * i * t
  * Esta fórmula calcula apenas os juros. Ou seja, quanto a mais foi cobrado e não inclui o valor inicial
  * C = capital
  * i = taxa
  * t = tempo
*/

/* Segunta fórmula (Montante)
  * M = C + J
  * Descobre o valor total a ser pago ou recebido
  * Capital + juros
  * M = montante
  * C = capital
  * J = Juros
*/

function jurosSimples(capital, taxa, tempo) {
  const juros = capital * taxa * tempo;
  const montante = capital + juros;

  return {
    capital,
    juros,
    montante
  };
};

console.log(jurosSimples(1000, 0.10, 2))

// Juros Compostos

/* Primeira fórmula (Montante)
  * M = C . (1 + i) ** t
  * Calcula o valor final, já com os juros acumulados
  * Aqui ainda não sabe quanto foi de juros
  * M = Montante
  * C = capital
  * i = taxa
  * t = tempo
*/

/* Segunda fórmula (Juros)
  * J = M - C
  * Do total final, quanto existe de juros?
  * 
*/

function jurosCompostos(capital, taxa, tempo) {
  const montante = capital * (1 + taxa) ** tempo;
  const juros = montante - capital;

  return {
    capital,
    juros,
    montante
  };
};

console.log(jurosCompostos(1000, 0.10, 2));

// ATENÇÃO: FORNECER A TAXA SEMPRE EM DECIMAL!!!
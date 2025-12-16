/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.
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

console.log(jurosSimples(100, 10/100, 2))


function jurosCompostos(capital, taxa, tempo) {
  const montante = capital * (1 + taxa) ** tempo;
  const juros = montante - capital;

  return {
    capital,
    juros,
    montante
  };
};

console.log(jurosCompostos(100, 0.10, 2));
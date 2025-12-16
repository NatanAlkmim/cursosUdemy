/*
As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando true ou false.
*/

/* Regrinhas
  Tem que ser divisível por 4
  Não precisa ser necessariamente divisível por 100
  Precisa ser divisível por 400

  A função deve:
    -> Receber o ano
    -> Calcular as regrinhas
    -> Retornar true e false
*/

function anoBissexto(ano) {
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

  if (bissexto) {
    console.log(`O ano ${ano} é bissexto!`);
  } else {
    console.log(`O ano ${ano} não é bissexto!`);
  }
  return bissexto;
}

console.log(anoBissexto(2024));
console.log(anoBissexto(1900));
console.log(anoBissexto(2000));
console.log(anoBissexto(2030));
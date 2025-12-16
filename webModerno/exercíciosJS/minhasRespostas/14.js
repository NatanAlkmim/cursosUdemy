/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
também um default, que retornará uma mensagem de erro no console.
*/

/* Passo a passo
  * A estrutura deve receber uma string com nome de fruta
  *
  * Precisa possuir 3 casos
  *   -> Caso maçã: retornar "Não vendemos esta fruta aqui"
  *   -> Caso kiwi: retornar "estamos com escassez de kiwis"
  *   -> caso melancia: retornar "Aqui está, são 3 reais o quilo"
  *
  * Criar um default caso a pessoa escolha outro tipo de fruta para retornar uma mensagem de erro
*/

function sacolao(fruta) {
  switch ((fruta.toLowerCase())) {
    case 'maçã':
      return 'Não vendemos esta fruta aqui.';
    case 'kiwi':
      return 'Estamos com escassex de kiwis.';
    case 'melancia':
      return 'Aqui está, são 3 reais o quilo.';
    default:
      return 'Erro... Fruta invália!!';
  }
};

console.log(sacolao('Maçã'));
console.log(sacolao('kiwi'));
console.log(sacolao('Melancia'));
console.log(sacolao('Pera'));
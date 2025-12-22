/* substring()
  * Serve para extrair parte da string, mas a sintaxe é diferente
  * string.substring(inicio, fim);
  * Não aceita números negativos
  *   -> se tiver substring(1, 0), troca os valores automaticamente e retorna "3"
  * Troca os valores de inicio > fim
*/

const texto = '3!';

console.log(texto.substring(0, 1));
console.log(texto.substring(0));
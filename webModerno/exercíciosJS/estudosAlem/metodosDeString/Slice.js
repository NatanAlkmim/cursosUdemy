
/* .slice()
  * Serve para extrair partes de uma string
  *
  * Sintaxe:
  *   -> string.slice(inicio, fim);
  *   -> inicio: posição do primeiro caractere que você quer pegar
  *   -> fim: posição antes de qual caractere parar, não inclui o da posição fim
  *   -> Se o fim não for passado, pega até o final da string
*/
const texto3 = '3!';

console.log(texto3.slice(0, 1));
console.log(texto3.slice(0));
/* Recursão
  * Quando uma função chama a si mesma dentro do seu próprio corpo
  * Tecnica usada para resolver problemas repetitivos ou que podem ser divididos em subproblemas menores
  * Para Calcular o fatorial de n, multiplico n pelo fatorial de n-1
*/
/* Caso base:
  * Condição para a recursão. Evita que a função chame a si mesma infinitamente
  * Sem isso o programa entra em loop infinito e dá erro
*/
if (num == 0) return 1; // exemplo de caso base

/* Chamada recursiva
  * É a parte que faz a função chamar a si mesma, mas com um valor menor ou mais simples
  * No exemplo abaixo, cada chamada reduz num em 1 até chegar ao caso base
*/

return num * nomeFunc(num - 1);
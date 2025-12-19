/* Greedy
  * É um algorítmo que sempre escolhe a melhor opção local possível no momento
  * Ele espera que a soma dessas decisões leve à melhor solução global
*/
/* Regra de ouro:
  * Em cada passo, escolha a opção que parece melhor agora, sem reconsiderar decisões passadas
  * Passos:
  *   -> Começa com um prblema maior
  *   -> divide em pequenos passos
  *   -> Em cada passo, escolhe a melhor opção imediata
  *   -> Nunca volta atrás
*/
/* Como pensar greedy em JS?
  * Usar loops (for, while)
  * Ordena dados (sort)
  * Usa divisão e resto (Math.floor, %)
  * Resolve passo a passo
*/

/*
  * Criar constante de ceculas
  * Criar constante que armazena os resultados finais
  * for ... of
  * criar variável para arredondar os valores da divisão
  * 
*/

function contagemCedulas(valor) {
  const cedulas = [100, 50, 10, 5, 1]
  let texto = '';

  for (let cedula of cedulas) {
    if (valor >= cedula) {
      let quantidade = Math.floor(valor / cedula); // quantas cédulas cabem?

      if (quantidade > 0) {
      let notaOuNotas = quantidade === 1 ? 'nota' : 'notas'; // aqui diferencia singular de plural
      let realOuReais = cedula === 1 ? 'real' : 'reais'; // aqui diferencia singular de plural

      texto += `${quantidade} ${notaOuNotas} de ${cedula} ${realOuReais}, `;
      }

      valor = valor % cedula; // atualiza o valor restante
    }
  }

  return texto;
};

console.log(contagemCedulas(153));
/* While
  * Serve para repetir um bloco de código enquanto uma condição for verdadeira
  *   -> "Enquanto isso for verdade, continue fazendo"
*/

// Estrutura básica
let condicao
while (condicao) {
  // código que será repetido
};

// Condição: Expressão que retorna tre ou false

// Exemplo simples
let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
};

/* Explicação do exemplo simples
  * 1. O contador começa valendo 1
  * 2. O while pergunta:
  *       -> contador <= 5?
  * 3. Se for true:
  *       -> executa o console.log(contador)
  *       -> depois faz "contador++" (incrementa)
  * 4. Volta para o topo e verifica a condição novamente
  * 5. quando "contador" vira 6. a condição é false e o loop acaba
*/

/* Evitando o loop infinito
  * Precisa alterar a condição
  *   -> Incrementar (i++)
  *   -> Decrementar (i--)
  *   -> Mudar a variável da condição de alguma forma
*/

/* Quando usar o while?
  * Quando não se sabe exatamente quantas vezes o loop vai rodar
  * A repetição depende de um estado ou condição
*/

//Exemplo mais real

let senha = '';
const senhaCorreta = '1234';

while (senha !== senhaCorreta) {
  senha = prompt('Digite a sua senha');
}

console.log('Acesso pemitido')
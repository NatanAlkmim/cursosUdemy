//O código é executado pelo menos uma vez, mesmo que a condição seja falsa!!

//Exemplo simples
let num = 1;

do {
  console.log(num);
  num++
} while (num <= 5);

// while vs do...while
let x = 10;

while (x < 5) {
  console.log('Executou');
}

do {
  console.log('executou');
} while (x < 5);

// No segundo executou com a condição falsa

/* Quando usar "do...while"?
  * O código precisa rodar pelo menos uma vez
  * A condição só pode ser verificada depois da primeira execução
*/

// Exemplo real

let opcao;

do {
  opcao = prompt(
    'Escolha uma opção:\n1 - Ver saldo\n2 - Sacar\n0 - Sair'
  );
} while (opcao !== '0');

console.log('Programa encerrado')
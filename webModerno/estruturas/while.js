function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;// random gera um valor entre 0 e 1
  return Math.floor(valor);
};

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
}; // ou ela executa nenhuma vez ou executa any de vezes até alcançar a expressão

console.log('Até a próxima!');
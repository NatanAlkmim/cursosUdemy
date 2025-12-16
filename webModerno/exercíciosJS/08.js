/*
Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
jogo. (Número do pior jogo). 
Obs.: O primeiro jogo não conta como novo recorde do melhor.  
Exemplo:  
String: “10 20 20 8 25 3 0 30 1” 
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação 
aconteceu no sétimo jogo.) 
*/

/*
  n = número de jogos de basquete

  Após cada jogo, ele anota o valor dentro da variável
    -> verifica se é maior ou menor do que o seu pior desempenho
    -> O primeiro valor não conta como recorde

  lista string = "Pontuação1, pontuação2, pontuação3..."

  Escrever uma função que ao receber o valor:
    -> Compara os valores um a um
    -> Retornará o número de vezes que ele bateu o próprio recorde de maior número de pontos
    -> retornará o número do pior jogo
*/

const resultados = [10, 20, 20, 8, 25, 3, 0, 30, 1]

function progresso(jogos) {
  let recorde = jogos[0],
    qntRecordes = 0;

  let pior = jogos[0],
    qntpiores = 0,
    indicePiorJogo = 1;
  
  for (let i = 1; i < jogos.length; i++) {
    const pontos = jogos[i];
    if (pontos > recorde) {
      recorde = pontos;
      qntRecordes++;
    }

    if (pontos < pior) {
      pior = pontos;
      qntpiores++;
      indicePiorJogo = i + 1;
    }
  };
  return [
    `Quatidade de recordes: ${qntRecordes}`,
    `Índice do pior jogo: ${indicePiorJogo}`,
    `Quantidade de piores jogos: ${qntpiores}`
  ];
};

console.log(progresso(resultados));




















/*
function progresso(jogos) {
  let recordeAtual = jogos[0];
  let quantidadeDeRecordes = 0;
  let pior = jogos[0]
  let piorPontuação = 0;

  for (let i = 0; i < jogos.length; i++) {
    if (jogos > recorde) {
      recordeAtual = jogos[i];
      quantidadeDeRecordes++;
    }
  }

  for ()
}
*/
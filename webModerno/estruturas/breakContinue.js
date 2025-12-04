const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) { // x = índice do array
  if (x == 5) {
    break;
  };
  console.log(`${x} = ${nums[x]}`);
};

for (y in nums) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${nums[y]}`);
};

externo:
  for (a in nums) {
    for(b in nums) {
      if(a == 2 && b == 3) {
        break externo; // colocou externo para o brak chamá-lo ao invez de chamar o for interno
      };
      console.log(`Par = ${a},${b}`);
    };
  };
console.log("Fim!");

/* break
  * Interrompe o laço
  * Sai para a próxima sentença de código fora do laço que ele está relacionado
  * Causa um desvio de fluxo para fora do laço corrente
*/

/* continue
  * Interrompe a execução atual e pula para a próxima
  * Não sai do laço, igual ao break
  * interrompe a repetição cujo o valor y seja igual a 5
  * Ou seja, quando chegra no índice 5 do array, ele interompe e vai para a próxima repetição
  * Só faz sentido agir em cima de estruturas de repetição
*/
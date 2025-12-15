// IIFE -> Immediately Invoked Function Expression

(function() {
  console.log('Será executado na hora certa!');
  console.log('Foge do escopo mais abrangente!');
})();

/** IIFE
  * A criação da função tem que ser envolvida por parênteses para não dar erro de sintaxe!!
  * Deve vir acompanhada de outro par de oarênteses no final para que ela seja invicada.
  * Pode ser colocado var, let, const...
*/
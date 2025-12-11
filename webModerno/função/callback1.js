const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`); //como o array começa no índice 0, somou o um para imprimir a partir do 1 
};

fabricantes.forEach(imprimir); // Para cada elemento que o forEach encontrar dentro do array, ele vai chamar a função (imprimir) de volta para cada elemento que for encontrado
fabricantes.forEach(function(a) {
  console.log(a); // o parâmetro 'a' será cada um dos elementos do array!!
});
fabricantes.forEach(fabricante => console.log(fabricante));

/* Callback
  * Passar uma função para uma outra função e quando determinado evento acontecer essa função passada será disparada e chamada de volta
  * Pode ser chamada várias vezes ou apenas uma única vez
  * Evento é cada um dos elementos percorridos no array
  * Para cada elemento o callback é chamado, passando o próprio elemento e o índice e faz isso para cada um dos elementos do array
*/
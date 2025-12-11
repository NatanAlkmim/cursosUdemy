console.log(soma(3, 4));
// console.log(sub(3, 4)); // gera um erro!!

// function declaration
function soma(x, y) {
  // corpo da função
  return x + y;
};

// function expression
// declarar uma função anônima e atribuir essa função a uma variável ou constante
const sub = function (x, y) {
  return x - y;
};

// named function expression
// Além de ter uma constante que armazenará a função, ao invez de ser anônima é nomeada
const mult = function mult(x, y) {
  return x * y;
};

/* Function declaration
  * Pode chamar a função antes mesmo de declará-la
  * O interpretador primeiro carrega as funções e depois começa a executar o código
*/


/* Named function expression
  * Uso reduzido
  * Mais utilizado para facilitar debugar
 */
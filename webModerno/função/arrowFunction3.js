let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global); // Quem chama é o ambiente global -> Portanto o this é global (true)
comparaComThis(this); // Esse this é module.exports, não é global, portanto da false

const obj = {};
comparaComThis = comparaComThis.bind(obj); // Aqui diz que o this é objeto
comparaComThis(global); // False, já que colocamos o this como obj
comparaComThis(obj); // True, já que o this é um obj

let comparaComThisArrow = param => console.log(this === param); // Aqui ele nasce dentro do módulo, então o this será "module.exports". Ponto final.
comparaComThisArrow(global); // Da false, pois ele é module.exports e não global
comparaComThisArrow(module.exports); // da true
comparaComThisArrow(this); // pois this é this

comparaComThisArrow = comparaComThisArrow.bind(obj); // Mesmo trazendo o bind, o arrow function não permite essa mudança
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // verdadeiro

/* Função normal
  * Muda dependendo de quem chama
  * Se alguém do ambiente global a chamar, ela diz que o this é global
  * se fizer bind(obj),  ela muda e passa a dizer que o this é obj (por isso false)
  * se outro objeto a chamar ela usa esse
  * Quem a chama decide quem ela é
  * Bind funciona!!
*/

/* Arrow function
  * Ele não aceita mudar o seu this
  * Ele nasceu dentro de um modulo Node, então o this vira "this = module.exports"
  * Mesmo usando o bins(obj), o this não muda
  * O this sempre será o ambiente onde ela foi criada
  * Bind não funciona!!
  * Não tem this próprio, ele pega emprestado o this do lugar onde ela foi criada
  * o this é mais deterministico e é associado ao local onde a função foi definida
*/
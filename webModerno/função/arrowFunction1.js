let dobro = function (a) {
  return 2 * a;
};

// Para chamar a função arrow, deve-se armazená-la em uma variável
dobro = (a) => {
  return 2 * a;
};

// da para reduzir mais tirando os parênteses caso tenha um único parâmetro
dobro = a => 2 * a; // return implícito
console.log(dobro(Math.PI));

let ola = function () {
  return 'Olá';
};

ola = () => 'Olá'; // forma padrão!!
ola = _ => 'Olá' // possui um parâmetro!!
console.log(ola())

let teste = function (b, c) {
  return 2 * b + c;
};

// Com mais de uma variável!!
teste = (b, c) => 2 * b + c;
console.log(teste(5, 6))
// Passar o código de classeVsFactory para função construtora

function Pessoa(nome1) {
  this.nome1 = nome1;
  this.euSou = function() {
    console.log(`Meu nome é ${this.nome1}`);
  };
};

const pessoa1 = new Pessoa('Natan');
pessoa1.euSou();

// com arrow function
const criarPessoa = nome2 => {
  return {
    euSou: () => console.log(`Meu nome é ${nome2}`)
  };
};

const p2 = criarPessoa('Natan');
p2.euSou();

/* Função construtora
  * Usadas para criar e inicializar objetos de um mesmo tipo.
  * Permitem instanciar múltiplos objetos com propriedades e métodos semelhantes.
  * Utiliza o operador 'new'.
  * Começam com a letra maíuscula.
  * dentro delas, a palavra-chave 'this' se refere ao objeto recém-criado
*/
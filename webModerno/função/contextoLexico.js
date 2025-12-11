const valor = 'Global';

function minhaFuncao() {
  console.log(valor);
};

function exec() {
  const valor = 'Local';
  minhaFuncao();
};

exec();

/* Contexto Léxico
  * A função carrega consigo o contexto no qual ela foi escrita
 */
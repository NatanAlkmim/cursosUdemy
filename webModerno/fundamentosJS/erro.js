function tratarErroELancar(erro) {
    //throw new Error('...');
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    };
};


function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCasa() + '!!!')
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('final')
    };
};

const obj = { nome: 'Roberto' }; // name - erro proposital
imprimirNomeGritado(obj);



/* try
    * É um bloco de código que dentro há um código que pode gerar algum tipo de erro
    * 
*/

/* catch
    * Quando try gerar um erro, o catch capturará o erro
    * Ele pode tratar o erro, como gerar uma mensagem ao usuário
    * Colocar após o try
*/

/* throw
    * Lança uma mensagem ao usuário
    * Pode ser lançado vários tipos (vide function tratarErroELancar(erro))
    * 
*/

/* finally
    * bloco que será executado sempre, mesmo ocorrendo erro ou não
    *
*/
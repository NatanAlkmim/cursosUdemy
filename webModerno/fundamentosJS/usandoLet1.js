/*Uma variável definida com "let"
    * possui apenas tres escopos possíveis:
    * - Escopo global;
    * - Escopo de função;
    * - Escopo de bloco
*/

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
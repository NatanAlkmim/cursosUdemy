/*Uma variável definida com "var"
    * possui apenas dois escopos possíveis:
    * - Nível global (visível na aplicação inteira - browser);
    * - Escopo de função (exemplo do function(teste)).
*/

{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) -> Erro
/* Quando define uma variável dentro de uma função,
    * o escopo estará visível apenas dentro da função
*/
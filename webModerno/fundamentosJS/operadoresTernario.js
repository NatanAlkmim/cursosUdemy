const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Se der verdadeiro, ele retorna o 'aprovado' e se der falso retorna 'reprovado'
/*const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}*/

console.log(resultado(7.1))
console.log(resultado(6.7))

const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
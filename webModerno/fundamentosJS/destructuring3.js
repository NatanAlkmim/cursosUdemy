// Gera valores randômicos, ou seja, valores aleatórios entre 40 e 50

function rand({ min = 0,  max = 1000 }) {
    const valor = Math.random() * (max - min) + min // valores aleatórios da diferença entre max e min somado ao valor de mínimo
    return Math.floor(valor) // arredonda os números para baixo e Math.ceil arredonda para cima
}

//const obj = { max: 50, min: 40 }
//console.log(rand(obj))
console.log(rand({ max: 50, min: 40 })) // valores entre 40 e 50
console.log(rand({ min: 955})) // pega o valor máximo padrão definido na função
console.log(rand({})) // gera números aleatórios entre 0 e 1000
// console.log(tand()) // da erro!!
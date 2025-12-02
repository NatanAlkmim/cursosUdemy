function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // se o mínimo for maior que o máximo, inverta as duas variáveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // passando o valor mínimo e o máxímo será o 1000
console.log(rand([, 10])) // assumirá o mínimo como zero
console.log(rand([])) // será entre 0 e 1000
// console.log(rand()) // da erro!! Está desestruturando elementos de algo que é nulo ou undefined
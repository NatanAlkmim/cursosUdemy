console.log('01)', '1' == 1) // Compara apenas o valor e não se preocupa com o tipo
console.log('02)', '1' === 1) // Compara valor e tipo. '1' é uma string e 1 é um número
console.log('03)', '3' != 3) // 3 é diferente de 3?
console.log('04)', '3' !== 3) // se é diferente de tipo e de valor

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // Data de referência de JS -> 1° de Janeiro de 1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // da false, pois possuem endereços de memória diferentes, já que são duas variáveis
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)
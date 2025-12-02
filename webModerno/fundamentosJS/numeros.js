const peso1 = 1.0,
    peso2 = Number("2.0");

console.log(peso1, peso2);
/* isInteger usado para ver se o 
    * valor é um número inteiro ou não
*/
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871,
    avaliacao2 = 6.871;
    
const total = avaliacao1 * peso1 + avaliacao2 * peso2,
    media = total / (peso1 + peso2);


console.log(media);
console.log(media.toFixed(2)); // reduz casas decimais
console.log(media.toString(2)) // converter em string - Para binário, colocar o 2
console.log(typeof media)





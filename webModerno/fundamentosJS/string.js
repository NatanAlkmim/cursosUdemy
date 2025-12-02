const escola = "Cod3r";

console.log(escola.charAt(4)); // caractere que está no índice '4'
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // pega o valor dentro da tabela ASC
console.log(escola.indexOf("3")); // retorna o índice associado ao dígito 3 que está dentro deescola.

console.log(escola.substring(1)); // imprime a palavra a partir do índice 1
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!"); // usando concatenação!!

console.log(escola.replace(3, "e")); // substituir o 3 por "e"
console.log(escola.replace(/\d/, "e")) // expressão regular, substitua todos os dígitos pela letra "e"
console.log(escola.replace(/\w/g, "e")) // substitui todas as letras e dígitos pela letra "e"

console.log("Ana,Maria,Pedro".split(",")); // pegará a vírgula, separar e gerar um array com 3 elementos
console.log("Ana,Maria,Pedro".split(/,/)); // mesma coisa!!
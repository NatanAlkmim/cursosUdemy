let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1 // representa um valor booleano
console.log(!!isAtivo); // "!" é uma negação, colocar duas vezes vira positivo -> não + não = sim
console.log(!isAtivo);

console.log("os verdadeiros...");
console.log(!!3); // aqui força uma conversão para verdadeiro ou falso usando o "!!"
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // atribuição

console.log("os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("para finalizar...");
console.log(!!("" || null || 0 || " ")); // retorna o primeiro valor verdadeiro que encontrar

let nome = "";
console.log(nome || "Desconhecido");
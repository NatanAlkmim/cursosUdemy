/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

// Passos
/*
  * Parâmetros: Altura e taxa de crescimento anual (duas crianças);
  * Calcular:
  *   - existencia de criança menor OK
  *   - quantos anos para a menor ultrapassar a maior
  * Utilizar cm para unidade de medida
*/

function calculo(altura1, taxa1, altura2, taxa2) {
  const crianca1 = { altura: altura1, taxa: taxa1 };
  const crianca2 = { altura: altura2, taxa: taxa2 };
  
  let criancaMaior;
  let criancaMenor;

  let anos = 0;

  if (crianca1.altura > crianca2.altura) {
    criancaMaior = crianca1;
    criancaMenor = crianca2;
  } else if (crianca2.altura > crianca1.altura) {
    criancaMaior = crianca2;
    criancaMenor = crianca1;
  } else {
    return "As alturas das crianças são iguais";
  }

  if (criancaMenor.taxa <= criancaMaior.taxa) {
    return "A criança menor nunca ultrapassará a maior"
  }

  while (criancaMenor.altura <= criancaMaior.altura) {
    criancaMenor.altura += criancaMenor.taxa;
    criancaMaior.altura += criancaMaior.taxa;
    anos++;
  }

  return `A criança menor ultrapassará a maior em ${anos} anos`;
}


console.log(calculo(6, 1, 5, 2));
console.log(calculo(6, 2, 5, 2));

// ...

console.log('\n')

// Outro jeito

function calculo2(altura1, taxa1, altura2, taxa2) {
  const crianca1 = { altura: altura1, taxa: taxa1 };
  const crianca2 = { altura: altura2, taxa: taxa2 };
  
  let criancaMaior = crianca1.altura > crianca2.altura ? crianca1 : crianca2;
  let criancaMenor = crianca2.altura > crianca1.altura ? crianca1 : crianca2;

  let anos = 0;

  if (crianca1.altura === crianca2.altura) {
    return 'As alturas das criançs são iguais';
  }

  if (criancaMenor.taxa <= criancaMaior.taxa) {
    return "A criança menor nunca ultrapassará a maior";
  }

  while (criancaMenor.altura <= criancaMaior.altura) {
    criancaMenor.altura += criancaMenor.taxa;
    criancaMaior.altura += criancaMaior.taxa;
    anos++;
  }

  return `A criança menor ultrapassará a maior em ${anos} anos`;
}


console.log(calculo2(6, 1, 5, 2));
console.log(calculo2(6, 2, 5, 2));
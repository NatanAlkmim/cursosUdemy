// Fazer um programa para encontrar todos os pares entre 1 e 100.
function pares(num) {
  let totalDePares = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      totalDePares++
      console.log(i)
    }
  }
  return
}

console.log(pares(100))
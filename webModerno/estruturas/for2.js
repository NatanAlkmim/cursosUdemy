const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
  console.log(i, notas[i]);
};

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64,
};

for(let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}; // interessante usar essa fórmula para objetos!!

// Deve colocar o let antes de atributo, para que nós não tenhamos mais acesso a ele dentro do escopo globa
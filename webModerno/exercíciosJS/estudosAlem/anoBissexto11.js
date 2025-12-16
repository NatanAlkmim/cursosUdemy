function anoBissexto(ano) {
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

  if (bissexto) {
    console.log(`O ano ${ano} é bissexto!`);
  } else {
    console.log(`O ano ${ano} não é bissexto!`);
  }
  return bissexto;
}

console.log(anoBissexto(2024));
console.log(anoBissexto(1900));
console.log(anoBissexto(2000));
console.log(anoBissexto(2030));
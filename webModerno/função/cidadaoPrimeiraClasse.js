// Finção em JS é First-Class Object (Citizens)
// Higher-order function
// Cidadão de primeira linha é quando a função como um dado

// criar de forma literal
function fun1() { }; // O bloco é obrigatório!!

// Armazenarem uma variável
const fun2 = function () { };

// Armazenar em um array
// Pode armazenar função literal (fun1) e constante (fun2)
// Pode declarar a função na contrução do array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0] (2, 3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar()) // os () invocam a função!!

// Passar função como parâmetro
function run(fun) {
  fun()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
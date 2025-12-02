let a = 7,
    b = 94,
    temp = a;

a = b;
b = temp;


// [a, b] = [b, a] -> Outra forma de fazer ( a e b recebem o valor de b e a respectivamente)

// depois da troca... a = 94 e b = 7
console.log(a);
console.log(b);
// H = Higher
// O = Order
// F = Function
// Função de Alta Ordem
// Uma Função que chama outras funções

function calcular (numero1, numero2, operacao) {
    return operacao(numero1, numero2);
};

function soma(num1, num2){
    return num1+num2;
};

function subtrair (sub1, sub2){
    return sub1-sub2;
};

const resulado = calcular(10, 5, soma);
const resulado2 = calcular(50, 10 , subtrair);

console.log ("A soma dos dois numero é:", resulado);
console.log ("A subtração de dois valores é", resulado);
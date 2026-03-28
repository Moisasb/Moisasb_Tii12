// Para declarar uma função, será necessário a palavra reservada "Function" + nome da função

function saudacao() {
    console.log("Olá", nome);
};

saudacao("Moisés");
saudacao("Pedro")

//Função com retorno
function calcDobro(numero) {
    return numero * 2;

};

const numero = calcDobro(50);
console.log("O dobro de 50 é: ", numeroDobro);

//arrow function
const saud = (nome) => {
    console.log("Olá", nome)
};

saud("Rafa");

const calculoDobro = (numero1) => {
    return numero1 * 2;
};
console, log(calculoDobro(25));

//Função mais simplificada
const saudacao2 = nome => console.log ("Olá", nome);
saudacao2("Chico")

const Dobro = numero => numero*2;
console.log(Dobro(10));
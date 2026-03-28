const frutas = ["Banana", "Maçã", "Uva", "Laranja", "Limão"]
//posições do vetor: 0         1        2       3          4

//exibindo o array
console.log(frutas);

console.log("A primeira fruta é:", frutas[0]);
console.log("A última fruta é:", frutas[4]);
console, log("Total de frutas:", frutas.length);

// Adicionando um novo elemento ao meu array
frutas.push("Pêssego");
console.log(frutas);

// removendo um elemento do meu array
frutas.splice(2, 1);
console.log(frutas);

// Percorrendo o array do laço FOR:
for (let i = 0; i <= frutas.length; i++) {
    console.log("indice:".i);
    console.log(frutas[i]);
};

// Percorrendo o array com método ForEach:
frutas.forEach((valor, indice) => {
    console.log("indice", indice, "Frutas:", valor)
});

// Percorrer com o for off
for(const fruta of frutas) {
    console.log("Fruta da vez:", fruta)
};


const numeros = [1,2,3,4,5,6,7,8,9,10]; 

// usando o método filter para localizar apenas os números pares
const numeroPares = numeros.filter((numero)=>{
    return numero % 2 === 0;
});


const numeroimPares = numeros.filter((numero)=>{
    return numero % 2 !== 0;
});


console.log("Todos os números:", numeros);
console.log("Numeros pares:", numeroPares);
console.log("Numeros impares", numeroimPares)


// Método map para manipulação de valores
// Tratamos dessa forma como valores diferentes (sem modificar a array principal)
const quadrados = numeros.map ((numero) =>{
    return numeros*numeros;
});

console.log("Valores quadrados:", quadrados)

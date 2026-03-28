//Laços de repetição
//While, Do while e For

let contador = 1;
let contador2
while (contador<=10) {
    console.log(contador+"")
    contador++
};

do {
    console.log(contador2+"")
    contador2++
} while (contador2<=10);


for (let numero = 1; numero<=5; numero++){
    console.log(numero, "");
};

let palava = calopsita;

// Length = COnta quantos caracteres existem em uma string
for(let contador = 0;contador<=palava.length;contador++) {
    console.log(palava[contador]);
    console.log(contador);
};
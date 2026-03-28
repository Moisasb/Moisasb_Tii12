//Bliblioteca do node para receber as informações do úsuario via terminal
const { stdout } = require('process')
const readline = require('readline')

//diz que a leitura será via terminal
const leitor = readline.createInterface({
    input: processstdin,
    output: process.stdout
});

leitor.question("Qual é seu nome?", (nome) => {
    console.log("Ola" , nome);
    console.log("Seja bem vindo(a)!")

    leitor. question("Qual a sua idade", (idade) =>{
        if (idade>=18) {
            console.log("Você é maior de idade!");
        } else {
            console.log("Você é menor de idade")
        };
        leitor.close();
    })
});
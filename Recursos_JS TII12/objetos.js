const pessoa = {
nome: "Ana",
idade: "16",
gereno: "Mulher", 
estuda: true
}; 

pessoa.sobrenome = "Clara";

console.log("nome:", pessoa.nome);

console.log("Pessoa:", pessoa);

pessoa.hobbies = ["ler", "Escrever", "Cantar"];
console.log("Pessoa:", pessoa);

//FOR IN ->
for(const chave in pessoa) {
    console.log("chave:", chave)
    console.log("Valores:", pessoa[chave])
};

// MÉTODOS PARA OBJETOS:

const chaves = Object.keys(pessoa);
const Valores = Object.values(pessoa)
const entradas = Object.entries(pessoa);

console.log("Chaves", chaves);
console.log("valores:", Valores);
console.log("Entradas:", entradas);
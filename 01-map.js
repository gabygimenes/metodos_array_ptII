//Método: Map()
//========================================================

console.log("======EXEMPLOS COM map()====\n")

//Exemplo 1 (Básico): Dobrar valores númericos
//================================================

console.log("=====Exemplo 1: Dobro de números=====")

const numeros  = [1, 2, 3, 4, 5];

const dobrados = numeros.map((num) => {
    return num * 2;
});

console.log("Original:", numeros);
console.log("Dobrados:", dobrados);
console.log("\n")

//Exemplo 2 (Intermediário):
//====================================

console.log("----Exemplo 2(Intermediário):")

const usuarios =[
    { id: 1, nome: "Ana Silva", idade: 22},
    { id: 1, nome: "Bruno Costa", idade: 22},
    { id: 1, nome: "Carlos Souza", idade: 22}
];

const apenasNomes = usuarios.map((usuario)=> usuario.nome);

console.log("\n");

//Exemplo 3
//================================

console.log("====Exemplo 3:=====")

const produtosBanco = [
    {id: 101, nome: "Teclado Mecânico RGB", preco: 250.0, estoque:15, custoInterno: 120.0}
    { id: 102, nome: "Mouse Gamer 16000 DPI", preco: 120.0, estoque: 0, custoInterno: 50.0 },
    { id: 103, nome: "Monitor 144Hz IPS", preco: 1100.0, estoque: 8, custoInterno: 700.0 }
];

// Regra de Back-End: formatar preço para o cliente e omitir dados sensíveis (custo interno)
const respostaApiPublica = produtosBanco.map((produto) => {
    return {
        id: produto.id,
        titulo: produto.nome.toUpperCase(),
        precoFormatado: `R$ ${produto.preco.toFixed(2)}`,
        disponivel: produto.estoque > 0
    };
});

console.log("Resposta da API (Sem custo interno):");
console.log(respostaApiPublica);
//fim
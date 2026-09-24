//some()
//função: Verifica se PELO MENOS UM elemento atende à condição testada.
//Retorna True ou False

console.log("===Exemplos Com some()===\n");

//Exemplo 1: Verificar existência de número negativo

console.log("====Exemplo 1, há numero negativo??======")
const temperaturas = [23,19,28,-2,31];

const TemCongelamento = temperaturas.some((temp) => temp < 0);

console.log("Temperaturas", temperaturas);
console.log("Houve temperatura abaixo de ZERO?", TemCongelamento);
console.log("\n");

//Exemplo 2: Checar pendência cadastral de usuários

console.log("===Exemplo 2 : há usuários inativos?===")

const usuarios = [
    {id: 1, nome: "Lucas", ativo: true},
    {id: 2, nome: "Mariana", ativo: false},
    {id: 3, nome: "Carlos", ativo: true}
];

const haInativos = usuarios.some((u) => !u.ativo);

console.log("Existem algum usuário inativo?", haInativos);
console.log("\n");

//exemplo 3- alerta de reposiçaõ de estoque

console.log("--- Exemplo 3: Alerta de estoque esgotado (Back-End Real) ---");

const inventario = [
  { id: 101, nome: "Monitor 24pol", estoque: 6 },
  { id: 102, nome: "Cabo HDMI 2.0", estoque: 0 }, // Esgotado!
  { id: 103, nome: "Webcam HD", estoque: 15 }
];

function checarNecessidadeDeReposicao(produtos) {
  const temEsgotado = produtos.some((p) => p.estoque === 0);

  if (temEsgotado) {
    return "⚠️ ALERTA: Há produtos esgotados no armazém. Acionar compras!";
  }

  return "✅ OK: Todos os produtos possuem estoque.";
}

console.log(checarNecessidadeDeReposicao(inventario));
//fim
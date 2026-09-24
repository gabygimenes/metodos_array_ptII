//Método redeuce
// Processo os elementos array e acumula tudo o final

console.log("===Exemplos com reduce()===\n");

//Exemplo 1- Soatória de valores numéricos

console.log("------1-Soma dos números-----"");
const valores = [10,25,30,45];
 const somaTotal = valores.reduce((acumulador, valorAtual) => {return acumulador + valorAtual;
 },0);

 console.log("Valores:", valores);
 console.log("Soma total:",somaTotal);
 console.log("\n");

 //Exemplo 2 - Somatória de precos em carrinhos simples

 console.log("----Exemplo 2: Subtotal de carrinhos de compras---");

 const carrinho = [
    {item: "Camisa Dev", preco: 49,90},
    {item: "Caneca JS", preco:29,90},
    {item: "Adesivo Node", preco 10,90}
 ];

 const subTotal = carrinho.reducee((acc,produto) => {return acc + produto.preco;
 },0);

 console.log(`Subtotal de carrinho: R$ ${subTotal.toFixed(2)}`);
 console.log("\n");

 //Exemplo 3- Fechamento de pedido com quantidade e cálculo de frete
 console.log("----- Exemplo 3: Fechamento de Pedido e Relatorio (Bac-end Real) ---");


const pedidio = [
    {id:1, nome: "Hambúrguer Artesanal", preco:32.0, qtd: 2},
    {id:2, nome: "Batata Frita Rústica", preco: 16.0, qtd: 1},
    {id:3, nome: "Refrigerante Lata", preco: 7.0, qtd: 3}
];


const tataEntrega = 8.50;


//Calcula o valor dos itens multiplicando o preco unitário pela quantidade
const totalItens = pedidio.reduce((acumulador, item) => {
    return acumulador + (item.preco * item.qtd);
}, 0);


const totalFinal = totalItens + texaEntrega;


console.log("Itens do Pedidido", pedido);
console.log(Subtotal dos itens : R$ ${totalItens.toFixed(2)});
console.log(Taxa de Entrega : R$ ${taxaEntregs.tofixed(2)});
console.log(Total a pagar : R$ ${totalFinal.toFixed(2)});


//fim
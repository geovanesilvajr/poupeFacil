//

//valor total
//adicionar categoria, adicionar porcentagem
//mostrar categorias salvas com a porcentagem do total e valores
//adicionar valor - fazer a conta de quanto vai ser destinado
//  para cada categoria com base na conta ja feita anteriomente

//categoria principal com valor total de 100% - ao adicionar nova categoria diminuir porcentagem e valor desta categoria principal
//ao adicionar
//adicionar categoria - input adicionar categoria -
// guardar em um array de categorias com objeto - propriedade(categoria, porcentagem e id)
//input - adicione o valor
//mostrar divisão do valor para cada categoria
//guardar total em uma variavel
//mostrar na tela o valor salvo
//loop para somar cada valor novo

//salvar input na variavel categoria pelo id

const prompt = require("readline-sync");
let nomeCategoria = "";
let valorCategoria = 0;
let porcentagem = 0;
let categorias = [];

let valorTotal = [];
let somaTotal = 0;

function adicionarCategoria() {
  nomeCategoria = prompt.question("Nome categoria: \n");
  valorCategoria = prompt.question("Digite o Valor: \n");
  porcentagem = prompt.question("Qual é a porcentagem: \n");

  let novaCategoria = {
    valor: valorCategoria,
    categoria: nomeCategoria,
    porcentagem: porcentagem,
    id: crypto.randomUUID(),
  };
  categorias.push(novaCategoria);
  valorTotal.push(novaCategoria.valor);

  const soma = valorTotal.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  console.log(soma);

  console.log("Categoria adicionada");
}
adicionarCategoria();
adicionarCategoria();

console.log("Total de categorias:", categorias.length);
console.log(categorias);

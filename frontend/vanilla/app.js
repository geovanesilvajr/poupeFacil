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

let id = 0;
let categorias = [];

console.log("CADASTRO DE CATEGORIAS");

while (true) {
  console.log(`\n--- Novo Registro (${categorias.length + 1}) ---`);
  let categoria = {};
  categoria.nome = prompt.question("Nome categoria: \n");
  categoria.valor = Number(prompt.question("Digite o Valor: \n"));
  categoria.porcentagem = Number(prompt.question("Qual é a porcentagem: \n"));

  categorias.push(categoria);
  console.log("Categoria adicionada com sucesso!");

  const opcao = prompt
    .question("Deseja cadastrar outro usuário?")
    .toLowerCase();
  if (opcao !== "sim") {
    break;
  }
}

console.log("\nRESUMO DOS DADOS!");
console.log("Total de cadastros: " + categorias.length);
console.table(categorias);

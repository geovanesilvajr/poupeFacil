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

const valorInicial = [
  {
    valor: 0,
    categoria: "Principal",
    porcentagem: 100,
    id: crypto.randomUUID(),
  },
];

const novaCategoria = [
  {
    valor: 0,
    categoria: "",
    porcentagem: 0,
    id: crypto.randomUUID(),
  },
];

const prompt = require("prompt-sync")();

function adicionarCategoria() {
  const categoria = prompt("Nome da categoria");
  console.log(categoria);
}
adicionarCategoria();

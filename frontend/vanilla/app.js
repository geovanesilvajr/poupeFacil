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

const total = document.getElementById("total-value");
const categorieName = document.getElementById("categorie-name");
const totalValue = document.getElementById("total-value");
const addBtn = document.getElementById("add-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const saveCategorieButton = document.getElementById("saveCategorieButton");
const categoriesList = document.getElementById("categories-list");
const inputCategorie = document.getElementById("input-categorie");
const inputAmount = document.getElementById("input-amount");
const saveCategorieBtn = document.getElementById("saveCategorieBtn");

let categories = [];
let totalAmount = 0;

saveCategorieBtn.addEventListener("click", () => {
  const name = inputCategorie.value;
  const value = inputAmount.value;

  if (name === "" || value === "") {
    alert("Por favor, preencha os campos de categoria e valor.");
    return;
  }

  const categorie = {
    name: name,
    value: Number(value),
  };

  categories.push(categorie);

  updateCategoriesDisplay();

  inputCategorie.value = "";
  inputAmount.value = "";
});

function updateCategoriesDisplay() {
  categoriesList.innerHTML = "";

  categories.forEach((categorie) => {
    const li = document.createElement("li");
    li.textContent = `${categorie.name}: R$ ${categorie.value.toFixed(2)}`;
    categoriesList.appendChild(li);
  });
}

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

const categoriesList = document.getElementById("categories-list");
const inputCategory = document.getElementById("input-category");
const inputAmount = document.getElementById("input-amount");
const saveCategoryBtn = document.getElementById("saveCategoryBtn");
const textMessage = document.getElementById("text-message");

let categories = [];
let totalAmount = 0;

saveCategoryBtn.addEventListener("click", () => {
  const name = inputCategory.value;
  const rawValue = inputAmount.value;

  if (name === "" || rawValue === "") {
    alert("Por favor, preencha os campos de categoria e valor.");
    return;
  }

  const value = parseFloat(rawValue);

  if (isNaN(value) || value <= 0) {
    alert("Por favor, insira um valor válido maior que zero.");
    return;
  }

  const category = {
    name: name,
    value: value,
  };

  categories.push(category);

  totalAmount += numericValue;

  updateCategoriesDisplay();

  inputCategory.value = "";
  inputAmount.value = "";

  textMessage.textContent = "Categoria salva com sucesso!";
});
setTimeout(() => {
  textMessage.textContent = "";
}, 3000);
window.location.href = "index.html";

function updateCategoriesDisplay() {
  categoriesList.innerHTML = "";

  categories.forEach((category) => {
    const li = document.createElement("li");
    li.textContent = `${category.name}: R$ ${category.value}`;
    categoriesList.appendChild(li);
  });
}

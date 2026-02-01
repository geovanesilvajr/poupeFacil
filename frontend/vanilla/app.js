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

const savedCategoryBtn = document.getElementById("savedCategoryBtn");
const totalValueDisplay = document.getElementById("total-value");

let totalValue = 0;

if (savedCategoryBtn) {
  savedCategoryBtn.addEventListener("click", () => {
    const inputCategory = document.getElementById("input-category");
    const inputAmount = document.getElementById("input-amount");

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
      value: parseFloat(rawValue),
    };

    let savedCategories = JSON.parse(localStorage.getItem("categories")) || [];

    savedCategories.push(category);

    localStorage.setItem("categories", JSON.stringify(savedCategories));

    inputCategory.value = "";
    inputAmount.value = "";

    window.location.href = "index.html";
  });
}

const categoriesList = document.getElementById("categories-list");

if (categoriesList) {
  loadCategories();
}

function loadCategories() {
  const data = localStorage.getItem("categories");
  const categories = data ? JSON.parse(data) : [];

  categoriesList.innerHTML = "";

  totalValue = categories.reduce((sum, category) => sum + category.value, 0);

  categories.forEach((category) => {
    const li = document.createElement("li");
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(category.value);
    li.textContent = `${category.name}: ${formattedValue}`;
    categoriesList.appendChild(li);

    totalValueDisplay.textContent = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalValue);
  });
}

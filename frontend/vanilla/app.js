const savedCategoryBtn = document.getElementById("savedCategoryBtn");
const totalValueDisplay = document.getElementById("total-value");

let totalValue = 0;

//LÓGICA DE ADICIONAR CATEGORIA
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

//LOGICA TELA INICIAL
//FUNÇÃO PARA EXIBIR CATEGORIAS SALVAS
if (categoriesList) {
  loadCategories();
}

function editCategory(categoryName) {
  // Lógica para editar a categoria
  const categoryValue = prompt("Insira o novo valor para a categoria:");
  if (categoryValue !== null) {
    let savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    const categoryIndex = savedCategories.findIndex(
      (category) => category.name === categoryName,
    );
    if (categoryIndex !== -1) {
      savedCategories[categoryIndex].value = parseFloat(categoryValue);
      localStorage.setItem("categories", JSON.stringify(savedCategories));
      loadCategories();
    }
  }
}

//FUNÇÃO PARA DELETAR CATEGORIA
function deleteCategory(categoryName) {
  let savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
  savedCategories = savedCategories.filter(
    (category) => category.name !== categoryName,
  );
  localStorage.setItem("categories", JSON.stringify(savedCategories));
  loadCategories();
}

//FUNÇÃO PARA CARREGAR CATEGORIAS
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
    li.textContent = `${category.name}: ${formattedValue} ${formattedValue ? ` - ${((category.value / totalValue) * 100).toFixed(2)}%` : ""} `;
    li.innerHTML += `<button onclick="deleteCategory('${category.name}')">X</button> `;
    li.innerHTML += `<button onclick="editCategory('${category.name}')">Editar</button>`;
    categoriesList.appendChild(li);

    totalValueDisplay.textContent = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalValue);
  });
}

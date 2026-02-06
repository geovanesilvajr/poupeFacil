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

    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedUser) {
      window.location.href = "login.html";
      return;
    }

    const keyOfUser = `categories_${loggedUser.email}`;

    let savedCategories = JSON.parse(localStorage.getItem(keyOfUser)) || [];

    savedCategories.push(category);

    localStorage.setItem(keyOfUser, JSON.stringify(savedCategories));

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

//FUNÇÃO PARA EDITAR CATEGORIA
function editCategory(categoryName) {
  const categoryValue = prompt("Insira o novo valor para a categoria:");
  if (categoryValue !== null) {
    let savedCategories = JSON.parse(localStorage.getItem("categories")) || [];

    if (isNaN(parseFloat(categoryValue)) || parseFloat(categoryValue) <= 0) {
      alert("Por favor, insira um valor válido maior que zero.");
      return;
    }
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
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedUser) return;
  const keyOfUser = `categories_${loggedUser.email}`;
  const data = localStorage.getItem(keyOfUser);
  const categories = data ? JSON.parse(data) : [];

  categoriesList.innerHTML = "";

  totalValue = categories.reduce((sum, category) => sum + category.value, 0);

  categories.forEach((category) => {
    const li = document.createElement("li");
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(category.value);
    li.innerHTML += `<span class="category-name">${category.name}</span>: <span class="category-value">${formattedValue}</span> ${formattedValue ? ` - ${((category.value / totalValue) * 100).toFixed(2)}%` : ""} `;
    li.innerHTML += `<button onclick="deleteCategory('${category.name}')">X</button> `;
    li.innerHTML += ` <button onclick="editCategory('${category.name}')">Editar</button>`;
    categoriesList.appendChild(li);

    totalValueDisplay.textContent = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalValue);
  });
}

//Logica página de cadastro de usuário
const cadastrarBtn = document.getElementById("cadastro-btn");

if (cadastrarBtn) {
  cadastrarBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const inputEmail = document.getElementById("cadastro-email");
    const inputPassword = document.getElementById("cadastro-password");

    const user = {
      email: inputEmail.value,
      password: inputPassword.value,
    };

    if (!user.email || !user.password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    let savedUsers = JSON.parse(localStorage.getItem("User added")) || [];

    savedUsers.push(user);

    localStorage.setItem("User added", JSON.stringify(savedUsers));

    inputEmail.value = "";
    inputPassword.value = "";

    window.location.href = "login.html";
  });
}

//Logica página de login de usuário
const loginBtn = document.getElementById("login-btn");

if (loginBtn) {
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const inputEmail = document.getElementById("login-email");
    const inputPassword = document.getElementById("login-password");

    const email = inputEmail.value;
    const password = inputPassword.value;

    let savedUsers = JSON.parse(localStorage.getItem("User added")) || [];

    const user = savedUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      window.location.href = "index.html";
    } else {
      alert("Email ou senha incorretos.");
    }
  });
}

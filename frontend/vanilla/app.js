const savedCategoryBtn = document.getElementById("savedCategoryBtn");
const totalValueDisplay = document.getElementById("total-value");

let totalValue = 0;

//Função para saber a chave do usuário atual
function getUserKey(suffix) {
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedUser) {
    return null;
  }
  return `categories_${loggedUser.email}_${suffix}`;
}

//Função para saber a chave das categorias do usuário atual
function getUserCategoriesKey() {
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedUser) return null;
  return `categories_${loggedUser.email}`;
}

// 4. Função de Formatação
function formatMoney(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

//Função saldo Total
function totalValueCategories() {
  const keyOfUser = getUserCategoriesKey();
  const data = localStorage.getItem(keyOfUser);
  const categories = data ? JSON.parse(data) : [];
  return categories.reduce((sum, category) => sum + category.value, 0);
}

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

    const keyOfUser = getUserCategoriesKey();

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
    const keyOfUser = getUserCategoriesKey();
    let savedCategories = JSON.parse(localStorage.getItem(keyOfUser)) || [];

    if (isNaN(parseFloat(categoryValue)) || parseFloat(categoryValue) <= 0) {
      alert("Por favor, insira um valor válido maior que zero.");
      return;
    }
    const categoryIndex = savedCategories.findIndex(
      (category) => category.name === categoryName,
    );
    if (categoryIndex !== -1) {
      savedCategories[categoryIndex].value = parseFloat(categoryValue);
      localStorage.setItem(keyOfUser, JSON.stringify(savedCategories));
      loadCategories();
      updateScreenBankValue();
    }
  }
}

//FUNÇÃO PARA DELETAR CATEGORIA
function deleteCategory(categoryName) {
  const keyOfUser = getUserCategoriesKey();
  let savedCategories = JSON.parse(localStorage.getItem(keyOfUser)) || [];
  savedCategories = savedCategories.filter(
    (category) => category.name !== categoryName,
  );
  localStorage.setItem(keyOfUser, JSON.stringify(savedCategories));
  loadCategories();
}

//FUNÇÃO PARA CARREGAR CATEGORIAS
function loadCategories() {
  const keyOfUser = getUserCategoriesKey();
  const data = localStorage.getItem(keyOfUser);
  const categories = data ? JSON.parse(data) : [];

  categoriesList.innerHTML = "";

  totalValue = categories.reduce((sum, category) => sum + category.value, 0);

  categories.forEach((category) => {
    const li = document.createElement("li");

    li.innerHTML += `<span class="category-name">${category.name}</span>: <span class="category-value">${formatMoney(category.value)}</span> ${formatMoney(category.value) === formatMoney(totalValue) ? ` - ${((category.value / totalValue) * 100).toFixed(2)}%` : ""} `;
    li.innerHTML += `<button onclick="deleteCategory('${category.name}')">X</button> `;
    li.innerHTML += ` <button onclick="editCategory('${category.name}')">Editar</button>`;
    categoriesList.appendChild(li);

    totalValueDisplay.textContent = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalValue);
  });
}

const saveBankValueBtn = document.getElementById("save-bank-value-btn");
const bankValueInput = document.getElementById("bank-value-input");
const bankValueList = document.getElementById("bank-value-list");
const storageKey = getUserKey("bankValue");

if (saveBankValueBtn) {
  updateScreenBankValue();
}
//Função salvar valor do input no localStorage
if (saveBankValueBtn) {
  saveBankValueBtn.addEventListener("click", () => {
    const bankValue = parseFloat(bankValueInput.value);
    if (isNaN(bankValue) || bankValue < 0) {
      alert("Por favor, insira um valor válido para o banco.");
      return;
    }
    const keyOfUser = getUserKey("bankValue");
    if (!keyOfUser) {
      window.location.href = "login.html";
      return;
    }
    localStorage.setItem(keyOfUser, bankValue.toString());
    bankValueInput.value = "";
    updateScreenBankValue();
  });
}

//Moatrar valores salvos do banco na tela
function updateScreenBankValue() {
  const keyOfUser = getUserKey("bankValue");
  if (!keyOfUser) return;
  const bankValue = localStorage.getItem(keyOfUser);
  if (!bankValue) return;
  bankValueList.innerHTML = `<li>Valor Atual no Banco: ${formatMoney(parseFloat(bankValue))}</li>`;
  bankValueList.innerHTML += `<li>Saldo a Poupar: ${formatMoney(totalValueCategories() - parseFloat(bankValue))}</li>`;
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

//Pagina logOut
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
}

//Mostrar email do usuário logado na página de perfil
const userEmailDisplay = document.getElementById("user-email");
if (userEmailDisplay) {
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedUser) {
    userEmailDisplay.textContent = loggedUser.email;
  }
}

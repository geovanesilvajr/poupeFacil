// util de formatação simples
function formatBRL(cents) {
  const n = (cents / 100).toFixed(2);
  return "R$ " + n.replace(".", ",");
}

function parseInputToCents(str) {
  // aceita "12,34" ou "12.34" ou "1234"
  const cleaned = str.replace(/[^\d,.-]/g, "").replace(",", ".");
  const num = parseFloat(cleaned) || 0;
  return Math.round(num * 100);
}

let balanceCents = 0;
const balanceEl = document.getElementById("balance");
const amountInput = document.getElementById("amount");

function render() {
  balanceEl.textContent = formatBRL(balanceCents);
}

document.getElementById("btnAdd").addEventListener("click", () => {
  const cents = parseInputToCents(amountInput.value);
  if (cents <= 0) {
    alert("Digite um valor maior que 0");
    return;
  }
  balanceCents += cents;
  render();
  amountInput.value = "";
  localStorage.setItem("poupe_balance", balanceCents);
});

document.getElementById("btnWithdraw").addEventListener("click", () => {
  const cents = parseInputToCents(amountInput.value);
  if (cents <= 0) {
    alert("Digite um valor maior que 0");
    return;
  }
  if (cents > balanceCents) {
    alert("Saldo insuficiente");
    return;
  }
  balanceCents -= cents;
  render();
  amountInput.value = "";
  localStorage.setItem("poupe_balance", balanceCents);
});

// carregar do localStorage
const stored = parseInt(localStorage.getItem("poupe_balance"));
if (!isNaN(stored)) balanceCents = stored;
render();

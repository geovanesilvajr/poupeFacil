import React, { useState } from "react";
import Header from "./components/Header";
import BankValue from "./components/BankValue";
import "./App.css";

function App() {
  // 1. ESTADO: Dados que vivem no componente Pai
  const [storageBalance, setStorageBalance] = useState(() => {
    const savedValue = localStorage.getItem("bankValue");
    return savedValue ? savedValue : 0;
  });

  const [inputValue, setInputValue] = useState(storageBalance);

  // 2. FUNÇÕES: O que o Pai sabe fazer
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    // Mudei o nome para ficar mais claro
    setStorageBalance(inputValue);
    localStorage.setItem("bankValue", inputValue);
    alert("Valor salvo com sucesso!");
    setInputValue(""); // Limpa o campo de input após salvar
  };

  // 3. RENDERIZAÇÃO: O Pai monta a tela e passa as ferramentas para os filhos
  return (
    <div className="App min-h-screen max-w-4xl mx-auto bg-gray-100 shadow-md rounded-lg">
      <Header />

      <main className="p-4 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold mb-4">
          Bem-vindo ao PoupeFácil!
        </h2>
        <p className="text-gray-700">
          Gerencie suas finanças de forma simples e eficiente.
        </p>

        {/* AQUI ESTÁ A MÁGICA DA LIGAÇÃO */}
        <BankValue
          // Esquerda: Nome da prop que chega no filho
          // Direita: A função/variável que sai daqui do pai
          onPoupClick={handleSaveClick}
          currentValue={inputValue}
          onInputChange={handleChange}
          confirmedValue={storageBalance}
        />
      </main>
    </div>
  );
}

export default App;

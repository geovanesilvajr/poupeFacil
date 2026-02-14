import React from "react";
// Removi o useState daqui, pois quem controla o estado agora é o App (Pai)

// Recebemos as ferramentas (props) que o Pai mandou
const BankValue = ({
  onPoupClick,
  currentValue,
  onInputChange,
  confirmedValue,
}) => {
  return (
    <div className="bank-value flex flex-col items-start gap-2 mt-4">
      <p>Digite o valor atual da sua conta bancária:</p>

      <input
        className="p-2 border rounded-md mb-2 w-full"
        type="number"
        value={currentValue} // Mostra o valor que vem do Pai
        onChange={onInputChange} // Avisa o Pai quando digita
        placeholder="Valor Poupado"
      />

      <button
        className="p-2 border rounded-md bg-green-500 text-white gap-2 hover:bg-green-600 font-bold"
        onClick={onPoupClick} // Avisa o Pai quando clica
      >
        Poupar
      </button>

      <div className="mt-6 p-4 bg-green-50 rounded border border-green-100 text-center w-full">
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Valor Atual no Banco
        </p>
        <p className="text-3xl font-bold text-green-700">
          {/* Formatando para Moeda Brasileira */}
          R${" "}
          {Number(confirmedValue).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default BankValue;

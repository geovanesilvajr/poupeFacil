import React, { useState, useEffect } from "react";

const BankValue = ({ onBankBtnClick }) => {
  return (
    <div className="bank-value flex flex-col items-start gap-2 mt-4">
      <p>Digite o valor atual da sua conta bancária:</p>
      <input
        className="p-2 border rounded-md mb-2"
        type="number"
        placeholder="Valor Poupado"
      />
      <button
        className="p-2 border rounded-md bg-green-500 text-white gap-2 hover:bg-green-600"
        onClick={onBankBtnClick}
      >
        Poupar
      </button>
      <h3>Valor Total Poupado</h3>
      <p>R$ 10.000,00</p>
    </div>
  );
};

export default BankValue;

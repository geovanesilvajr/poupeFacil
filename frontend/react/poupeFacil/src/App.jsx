import Header from "./components/Header";
import BankValue from "./components/BankValue";

import "./App.css";

function App() {
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

        <BankValue />
      </main>
    </div>
  );
}

export default App;

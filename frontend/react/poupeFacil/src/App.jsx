import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">
          Bem-vindo ao PoupeFácil!
        </h2>
        <p className="text-gray-700">
          Gerencie suas finanças de forma simples e eficiente. Acompanhe seus
          gastos, defina metas de economia e visualize gráficos para entender
          melhor seu comportamento financeiro.
        </p>
      </main>
    </div>
  );
}

export default App;

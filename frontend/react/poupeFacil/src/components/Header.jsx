function Header(onProfileClick) {
  return (
    <header className="bg-green-600 p-4 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-white text-2xl font-bold tracking-wide">
          PoupeFácil
        </h1>
      </div>
      <button className="text-white" onClick={onProfileClick}>
        Perfil
      </button>
    </header>
  );
}

export default Header;

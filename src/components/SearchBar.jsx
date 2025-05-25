function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="busqueda"
      placeholder="Buscar por ID o descripción"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
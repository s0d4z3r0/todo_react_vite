const Search = ({ search, setSearch }) => {
  return (
    <div className="search-form">
      <h4 className="fw-bold">Pesquisar:</h4>
      <div className="input-group">
        <label
          className="input-group-text bg-warning-subtle fw-bold shadow-none col-2 justify-content-center"
          htmlFor="search"
        >
          Pesquisar
        </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite para pesquisar..."
          className="form-control shadow-none"
        />
      </div>
    </div>
  );
};

export default Search;
